export default function ApplicationLogo(props) {
    return (
        <div className="app-brand demo">
            <a href="index.html" className="app-brand-link justify-content-center">
                <img className="w-25"
                    src="/admin/assets/img/icons/logo/logoMK-smile.png"
                    alt="logo-smile"
                />
                <span className="app-brand-text demo menu-text fw-bolder ms-2">
                    ManhKhanh
                </span>
            </a>

            <a
                href=""
                className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
            >
                <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
        </div>
    );
}
