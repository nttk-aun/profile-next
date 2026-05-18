import Link from "next/link";

type SiteFooterProps = {
  showProjectsLink?: boolean;
};

export function SiteFooter({ showProjectsLink = false }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        &copy; {year} Nonthawat Thongkham.
        {showProjectsLink ? (
          <>
            {" "}
            <Link href="/">CV</Link> · Projects
          </>
        ) : (
          " Built with care in Bangkok."
        )}
      </p>
    </footer>
  );
}
