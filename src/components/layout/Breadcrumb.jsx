import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex gap-2">
        <li>
          <Link to="/" className="hover:underline">
            Trang chủ
          </Link>
        </li>
        {pathnames.map((name, idx) => {
          const routeTo = "/" + pathnames.slice(0, idx + 1).join("/");
          return (
            <li key={idx} className="flex gap-2">
              <span>&gt;</span>
              <Link to={routeTo} className="hover:underline capitalize">
                {name}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
