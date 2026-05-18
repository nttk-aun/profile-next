import Link from "next/link";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EMAIL } from "@/lib/data/profile";

export default function ProjectsPage() {
  return (
    <div className="page-projects">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader
        eyebrow="Portfolio"
        title="My Projects"
        subtitle="Apps & sites I built — add more anytime"
        compact
        actions={
          <nav className="header-actions" aria-label="Page navigation">
            <Link href="/" className="btn btn--ghost">
              ← Back to CV
            </Link>
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
              Contact me
            </a>
          </nav>
        }
      />

      <main className="projects-page" id="main">
        <p className="projects-lead">
          เลือกโปรเจกต์ด้านล่างเพื่อเปิดดูบน Vercel — รายการนี้ขยายได้โดยแก้ไฟล์{" "}
          <code>lib/data/projects.ts</code>
        </p>
        <ProjectsGrid />
      </main>

      <SiteFooter showProjectsLink />
    </div>
  );
}
