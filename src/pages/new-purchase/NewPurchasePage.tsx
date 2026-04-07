import { CircleHelp } from "lucide-react";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CategoryTabs } from "./components/CategoryTabs";
import { CustomerSelect } from "./components/CustomerSelect";
import { PurchaseButton } from "./components/PurchaseButton";
import { ProductGrid } from "./components/ProductGrid";
import { PurchaseStepper } from "./components/PurchaseStepper";
import {
  goToConfigureStep,
  nextStep,
  prevStep,
  resetPurchaseFlow,
  setSelectedCategory,
  setSelectedCustomer,
} from "../../data/newPurchase/newPurchaseSlice";

export const NewPurchasePage = () => {
  const dispatch = useAppDispatch();
  const newPurchase = useAppSelector((state) => state.newPurchase);
  const [termYears, setTermYears] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [billingCycle, setBillingCycle] = useState("Annual Upfront");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [hasCategorySelection, setHasCategorySelection] = useState(false);

  const selectedProduct = newPurchase.products.find(
    (product) => product.id === newPurchase.selectedProductId
  );
  const unitPrice = useMemo(() => {
    const raw = selectedProduct?.priceLabel ?? "$2499";
    const parsed = Number(raw.replace(/[^0-9.]/g, ""));
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 2499;
  }, [selectedProduct?.priceLabel]);
  const discount = termYears === 2 ? 0.05 : termYears === 3 ? 0.1 : 0;
  const total = unitPrice * quantity * termYears * (1 - discount);
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: value < 10 ? 2 : 0,
    }).format(value);

  return (
    <div className="relative space-y-4 p-2 md:p-3">
      <PurchaseStepper activeStep={newPurchase.activeStep} steps={newPurchase.steps} />

      {newPurchase.activeStep === 1 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-1">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Browse Products</h3>
            <p className="mt-0.5 text-xs text-slate-500">Select customer, pick a category, and configure products.</p>
          </div>

          <div className="mt-3">
            <CustomerSelect
              customers={newPurchase.customers}
              value={newPurchase.selectedCustomerId}
              onChange={(customerId) => dispatch(setSelectedCustomer(customerId))}
            />
          </div>

          <CategoryTabs
            categories={newPurchase.categories}
            selectedKey={newPurchase.selectedCategory}
            showSelection={hasCategorySelection}
            onSelect={(category) => {
              setHasCategorySelection(true);
              dispatch(setSelectedCategory(category));
            }}
          />

          <ProductGrid
            products={newPurchase.products}
            selectedCategory={newPurchase.selectedCategory}
            onConfigure={(productId) => dispatch(goToConfigureStep(productId))}
          />
        </section>
      )}

      {newPurchase.activeStep === 2 && (
        <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <button
              type="button"
              onClick={() => dispatch(prevStep())}
              className="mb-3 text-sm font-medium text-sky-600 hover:text-sky-700"
            >
              {"<-"} Back to Products
            </button>

            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              {selectedProduct?.name || "Configure Product"}
            </h3>

            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-slate-700">Term Length</p>
              <div className="grid gap-2.5 md:grid-cols-3">
                {[
                  { year: 1, savings: "" },
                  { year: 2, savings: "Save 5%" },
                  { year: 3, savings: "Save 10%" },
                ].map((term) => (
                  <button
                    key={term.year}
                    type="button"
                    onClick={() => setTermYears(term.year)}
                    className={[
                      "rounded-xl border px-4 py-3 text-center transition-all",
                      termYears === term.year
                        ? "border-red-500 bg-red-50 ring-1 ring-red-100"
                        : "border-slate-300 bg-white hover:border-slate-400",
                    ].join(" ")}
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {term.year} {term.year === 1 ? "Year" : "Years"}
                    </div>
                    {term.savings ? <div className="mt-0.5 text-xs text-slate-500">{term.savings}</div> : null}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Number of Licenses/Seats
              </label>
              <div className="grid grid-cols-[44px_1fr_44px] items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-11 rounded-lg border border-slate-200 bg-slate-50 text-lg font-semibold text-slate-800"
                >
                  -
                </button>
                <div className="flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-lg font-semibold shadow-sm">
                  {quantity}
                </div>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-11 rounded-lg border border-slate-200 bg-slate-50 text-lg font-semibold text-slate-800"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Billing Cycle</label>
              <select
                value={billingCycle}
                onChange={(event) => setBillingCycle(event.target.value)}
                className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              >
                <option>Annual Upfront</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-slate-700">Add-ons (Optional)</p>
              <div className="space-y-1.5">
                {["Priority Support", "Advanced Analytics", "Custom Training"].map((addon) => (
                  <label
                    key={addon}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm transition hover:bg-slate-50"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes(addon)}
                      onChange={() =>
                        setSelectedAddons((prev) =>
                          prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
                        )
                      }
                    />
                    <span>{addon}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-4">
            <h4 className="text-xl font-semibold text-slate-900">Price Summary</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Unit Price</span>
                <span className="font-semibold text-slate-900">{formatCurrency(unitPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span className="font-semibold text-slate-900">{quantity} licenses</span>
              </div>
              <div className="flex justify-between">
                <span>Term</span>
                <span className="font-semibold text-slate-900">
                  {termYears} {termYears === 1 ? "Year" : "Years"}
                </span>
              </div>
            </div>
            <div className="my-4 border-t border-slate-200" />
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-slate-900">Total</span>
              <span className="text-3xl font-bold text-red-600">{formatCurrency(total)}</span>
            </div>
            <PurchaseButton
              type="button"
              onClick={() => dispatch(nextStep())}
              fullWidth
              className="mt-4"
            >
              Add to Cart
            </PurchaseButton>
          </aside>
        </section>
      )}

      {newPurchase.activeStep === 3 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Review Cart</h3>

          <div className="mt-4 rounded-xl border border-slate-200 p-3.5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-semibold text-slate-900">{selectedProduct?.name || "Firebox M290"}</h4>
                <p className="mt-0.5 text-xs text-slate-500">1 Year | 1 license | Annual Upfront</p>
              </div>
              <div className="text-xl font-bold text-slate-900">$2,499</div>
            </div>
          </div>

          <div className="my-4 border-t border-slate-200" />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none"
            />
            <PurchaseButton variant="secondary" className="h-10">
              Apply
            </PurchaseButton>
          </div>

          <div className="mt-3 space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-slate-900">$2,499</span></div>
            <div className="flex justify-between"><span>Tax (estimated)</span><span>$199.92</span></div>
          </div>

          <div className="mt-2.5 flex items-center justify-between border-t border-slate-200 pt-3">
            <span className="text-base font-semibold text-slate-900">Total Due</span>
            <span className="text-2xl font-bold text-slate-900">$2,698.92</span>
          </div>

          <div className="mt-4 flex gap-2.5">
            <PurchaseButton
              type="button"
              variant="secondary"
              onClick={() => dispatch(prevStep())}
            >
              {"<-"} Continue Shopping
            </PurchaseButton>

            <PurchaseButton
              type="button"
              onClick={() => dispatch(nextStep())}
              className="h-10 flex-1"
            >
              Proceed to Review {"->"}
            </PurchaseButton>
          </div>
        </section>
      )}

      {newPurchase.activeStep === 4 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Review Order Summary</h3>

          <div className="mt-4 grid gap-2.5 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-3.5">
              <h4 className="text-base font-semibold text-slate-900">Billing Details</h4>
              <div className="mt-2 space-y-1 text-sm text-slate-600">
                <p>Acme IT Solutions</p>
                <p>john.smith@acmeit.com</p>
                <p>Payment: Credit Card ****4242</p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-3.5">
              <h4 className="text-base font-semibold text-slate-900">Order Summary</h4>
              <div className="mt-2 space-y-1 text-sm text-slate-600">
                <p>1 product(s)</p>
                <p>Total: $2,698.92</p>
                <p className="text-emerald-600">Estimated delivery: Immediate</p>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition hover:bg-slate-50">
              <input type="checkbox" />
              <span>I agree to the Terms & Conditions</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition hover:bg-slate-50">
              <input type="checkbox" defaultChecked />
              <span>Enable Auto-Renew for these subscriptions</span>
            </label>
          </div>

          <div className="mt-4 flex gap-2.5">
            <PurchaseButton
              type="button"
              variant="secondary"
              onClick={() => dispatch(prevStep())}
            >
              {"<-"} Back
            </PurchaseButton>

            <PurchaseButton
              type="button"
              onClick={() => dispatch(nextStep())}
              className="h-10 flex-1"
            >
              Place Order {"->"}
            </PurchaseButton>
          </div>
        </section>
      )}

      {newPurchase.activeStep === 5 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
            OK
          </div>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">Order Placed Successfully</h3>

          <p className="mt-1.5 text-sm text-slate-600">
            Order Number: <span className="font-semibold">WG-72146345</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">
            A confirmation email has been sent to your registered email address.
          </p>

          <h4 className="mt-5 text-base font-semibold text-slate-900">What&apos;s Next?</h4>

          <div className="mx-auto mt-3 grid max-w-4xl gap-2.5 md:grid-cols-3">
            {[
              { title: "Account Provisioned", body: "Your services are being set up" },
              { title: "Onboarding Resources", body: "Check your email for guides" },
              { title: "Renewal Reminders", body: "We will notify you in advance" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-slate-50 p-3 text-left">
                <h5 className="text-sm font-semibold text-slate-900">{item.title}</h5>
                <p className="mt-1 text-xs text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <PurchaseButton
              type="button"
              variant="secondary"
              className="border-blue-600 text-blue-600 hover:border-blue-700 hover:bg-blue-50"
            >
              Download Invoice
            </PurchaseButton>

            <PurchaseButton
              type="button"
              variant="danger"
              onClick={() => dispatch(resetPurchaseFlow())}
            >
              Go to Dashboard
            </PurchaseButton>
          </div>
        </section>
      )}

      <button
        type="button"
        className="fixed bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition hover:bg-red-700"
        aria-label="Help"
      >
        <CircleHelp className="h-4 w-4" />
      </button>
    </div>
  );
};
