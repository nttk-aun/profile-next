import { CvHeaderActions, SiteHeader } from "@/components/SiteHeader";
import { Sidebar } from "@/components/Sidebar";
import { CvMain } from "@/components/CvMain";
import { SiteFooter } from "@/components/SiteFooter";
import { profile } from "@/lib/data/profile";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader
        title={profile.name}
        subtitle={profile.role}
        showPhoto
        actions={<CvHeaderActions />}
      />

      <div className="layout">
        <Sidebar />
        <CvMain />
      </div>

      <SiteFooter />
    </>
  );
}
