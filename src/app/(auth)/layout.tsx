import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Dashboard UI",
    description: "Dashboard UI",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
