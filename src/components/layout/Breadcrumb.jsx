import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getLabel = (segment) => {
    const map = {
      "san-pham": "Sản phẩm",
      suv: "SUV",
      sedan: "Sedan",
      mpv: "MPV",
      electric: "Điện",
    };
    return (
      map[segment.toLowerCase()] ||
      segment.charAt(0).toUpperCase() + segment.slice(1)
    );
  };

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Link to="/" className="hover:underline">
            Trang chủ
          </Link>
        </li>
        {pathnames.map((name, idx) => {
          const routeTo = "/" + pathnames.slice(0, idx + 1).join("/");
          const isLast = idx === pathnames.length - 1;

          return (
            <li key={idx} className="flex gap-2 items-center">
              <span>&gt;</span>
              {isLast ? (
                <span className="font-semibold text-gray-800">
                  {getLabel(name)}
                </span>
              ) : (
                <Link to={routeTo} className="hover:underline">
                  {getLabel(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
