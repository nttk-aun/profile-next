import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  showPhoto?: boolean;
  actions?: React.ReactNode;
  compact?: boolean;
};

export function SiteHeader({
  eyebrow = "Portfolio & CV",
  title,
  subtitle,
  showPhoto = false,
  actions,
  compact = false,
}: SiteHeaderProps) {
  return (
    <header
      className={`site-header${compact ? " site-header--compact" : ""}`}
      id="top"
    >
      <div className="header-inner">
        <div className="header-intro">
          <p className="header-eyebrow">{eyebrow}</p>
          <h1 className="header-name">{title}</h1>
          <p className="header-role">{subtitle}</p>
          {!compact && <p className="header-location">Bangkok, Thailand</p>}
        </div>
        {showPhoto ? (
          <div className="header-aside">
            <Image
              className="header-photo"
              src="/profile.png"
              alt="Nonthawat Thongkham"
              width={168}
              height={168}
              priority
            />
            {actions}
          </div>
        ) : (
          actions
        )}
      </div>
    </header>
  );
}

export function CvHeaderActions() {
  return (
    <nav className="header-actions" aria-label="Quick actions">
      <a
        href="/CV_Nonthawat_Thongkham.docx"
        className="btn btn--ghost"
        download="CV_Nonthawat_Thongkham.docx"
        aria-label="Download CV"
      >
        Download CV
      </a>
      <Link href="/projects" className="btn btn--primary">
        My Projects
      </Link>
    </nav>
  );
}
