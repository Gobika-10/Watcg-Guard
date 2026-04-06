import { useState } from "react";

interface HierarchyItem {
  name: string;
  percentage: string;
  widthPercent: number;
  tone: "red" | "green" | "gray";
}

interface OrganizationHierarchyCardProps {
  items: HierarchyItem[];
}

interface ChildNode {
  name: string;
  percentage: string;
  widthPercent: number;
  tone: "green" | "blue";
}

const primaryBarTone: Record<HierarchyItem["tone"], string> = {
  red: "bg-red-600",
  green: "bg-emerald-600",
  gray: "bg-emerald-600",
};

const childBarTone: Record<ChildNode["tone"], string> = {
  green: "bg-emerald-600",
  blue: "bg-sky-600",
};

const expandedChildren: Record<string, ChildNode[]> = {
  "Financial Services Group": [
    { name: "Firebox T45 Bundle", percentage: "73.18%", widthPercent: 73.18, tone: "blue" },
    { name: "Panda Adaptive Defense 360", percentage: "11.36%", widthPercent: 11.36, tone: "blue" },
  ],
  "TechCorp Industries": [
    { name: "AuthPoint MFA", percentage: "4.13%", widthPercent: 4.13, tone: "blue" },
    { name: "DNSWatchGO", percentage: "3.54%", widthPercent: 3.54, tone: "blue" },
  ],
  "Retail Solutions Inc": [
    { name: "WatchGuard EPDR", percentage: "4.96%", widthPercent: 4.96, tone: "blue" },
  ],
  "Healthcare Plus": [
    { name: "WatchGuard Cloud", percentage: "2.83%", widthPercent: 2.83, tone: "blue" },
  ],
};

export const OrganizationHierarchyCard = ({ items }: OrganizationHierarchyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!items.length) return null;

  const [root, ...children] = items;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Organization Hierarchy</h3>

      <div className="mt-3">
        <div className="flex items-center gap-3">
          <div className="h-7 w-[180px] rounded-md bg-slate-200">
            <div
              className={`h-7 rounded-md ${primaryBarTone[root.tone]}`}
              style={{ width: `${Math.max(root.widthPercent, 2)}%` }}
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">{root.name}</p>
            <p className="text-sm text-slate-600">{root.percentage}</p>
          </div>
        </div>
      </div>

      <div className="mt-2.5 space-y-2">
        {children.map((item, index) => {
          const childRows = isExpanded ? expandedChildren[item.name] ?? [] : [];
          return (
            <div key={item.name} className="space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="relative h-7 w-[180px]">
                  <div className="absolute left-5 top-[-10px] h-[17px] w-[2px] bg-slate-300" />
                  <div className="absolute left-5 top-[7px] h-[2px] w-6 bg-slate-300" />
                  {index < children.length - 1 || childRows.length > 0 ? (
                    <div className="absolute left-5 top-[7px] h-[28px] w-[2px] bg-slate-300" />
                  ) : null}

                  <div className="absolute left-8 top-0 h-7 w-[145px] rounded-md bg-slate-200">
                    <div
                      className={`h-7 rounded-md ${primaryBarTone[item.tone]} transition-all duration-700`}
                      style={{ width: `${Math.max(item.widthPercent, 2)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">{item.percentage}</p>
                </div>
              </div>

              {childRows.map((child, childIndex) => (
                <div key={`${item.name}-${child.name}`} className="ml-7 flex items-center gap-3">
                  <div className="relative h-7 w-[180px]">
                    <div className="absolute left-5 top-[-9px] h-[16px] w-[2px] bg-slate-300" />
                    <div className="absolute left-5 top-[7px] h-[2px] w-6 bg-slate-300" />
                    {childIndex < childRows.length - 1 ? (
                      <div className="absolute left-5 top-[7px] h-[24px] w-[2px] bg-slate-300" />
                    ) : null}

                    <div className="absolute left-8 top-0 h-7 w-[145px] rounded-md bg-slate-200">
                      <div
                        className={`h-7 rounded-md ${childBarTone[child.tone]} transition-all duration-700`}
                        style={{ width: `${Math.max(child.widthPercent, 2)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-slate-900">{child.name}</p>
                    <p className="text-sm text-slate-600">{child.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-3 border-t border-slate-200 pt-2.5">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-600">Click bars to expand and explore the hierarchy</p>
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            {isExpanded ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </div>
    </section>
  );
};
