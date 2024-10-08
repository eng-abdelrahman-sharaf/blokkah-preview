import { ModalProvider } from "@/context/ModalContext";

import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/sidebar/Sidebar";

import ModalWrapper from "@/components/modals/ModalWrapper";

import type { Metadata } from "next";
import { SidebarProvider } from "@/context/SidebarContext";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Main Admin Dashboard",
};

export default function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode,
}>) {

    return (
        <div className="flex w-full h-full bg-Brand-700">
            <div className="max-w-[19.5rem] w-fit lg:w-full">
                <SidebarProvider>
                    <Sidebar />
                </SidebarProvider>
            </div>
            <div className="flex flex-col items-start gap-8 md:gap-10 bg-white rounded-tl-[2.5rem] flex-grow overflow-hidden">
                <div className="p-6 md:p-8 !pb-0">
                    <Breadcrumb />
                </div>
                <div className="w-full flex-grow overflow-y-auto p-6 md:p-8 !pt-0">
                    <ModalProvider>
                        {children}
                        <ModalWrapper />
                    </ModalProvider>
                </div>
            </div>
        </div>
    );
}