import type { Metadata } from 'next'
import Template from '../_template'


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your personal dashboard overview',
}

export default function Page() {
  return (
    <Template
      title="Dashboard"
      description="Your personal dashboard overview"
      breadcrumb={[
        { label: 'Dashboardss', href: '/dashboard' },
        { label: 'Example', href: '/dashboard/example' },
      ]}
    >
      <div className="flex flex-1 flex-col gap-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </Template>
  )
}
