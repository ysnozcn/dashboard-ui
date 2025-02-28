import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface DashboardTemplateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  breadcrumb?: {
    label: string;
    href: string;
  }[];
}

const DashboardTemplate = ({ children, breadcrumb }: DashboardTemplateProps) => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {breadcrumb && breadcrumb.length > 0 && (
        <div className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-primary-foreground p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumb.map((item) => (
                  <Fragment key={item.href}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      )}
      <main className="w-full">{children}</main>
    </div>
  );
};

export default DashboardTemplate;
