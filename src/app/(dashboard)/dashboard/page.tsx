import type { Metadata } from "next";
import Template from "../_template";
import { Box } from "@/components/ui/box";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your personal dashboard overview",
};

export default function Page() {
  return (
    <Template
      title="Dashboard"
      description="Your personal dashboard overview"
      breadcrumb={
        [
          // { label: 'Dashboard', href: '/dashboard' },
          // { label: 'Example', href: '/dashboard/example' },
        ]
      }
    >
      <div className="flex flex-1 flex-col gap-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Box header="Statistics">
            <p>Staticstis content</p>
          </Box>
          <Box header="Activity">
            <p>Activity content</p>
          </Box>
          <Box>
            <p>Non header box example</p>
          </Box>
        </div>
        <Box header="General overview" className="min-h-40 flex-1">
          <p>General overview content</p>
        </Box>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Box header="Tasks" className="aspect-video">
            <p>Task list</p>
          </Box>
          <Box header="Notifications" className="aspect-video">
            <p>Notifications</p>
          </Box>
          <Box header="Messages" className="aspect-video">
            <p>Messages</p>
          </Box>
        </div>
        <Box header="Projects" className="min-h-40 flex-1">
          <p>Project list</p>
        </Box>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Box className="aspect-video">
            <p>Custom content 1</p>
          </Box>
          <Box className="aspect-video">
            <p>Custom content 2</p>
          </Box>
          <Box className="aspect-video">
            <p>Custom content 3</p>
          </Box>
        </div>
        <Box className="min-h-40 flex-1">
          <p>Additional content</p>
        </Box>
      </div>
    </Template>
  );
}
