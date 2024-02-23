<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('admin/assets/img/icons/logo/logoMK-smile.png') }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet" />

    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"
        integrity="sha512-WW8/jxkELe2CAiE4LvQfwm1rajOS8PHasCCx+knHG0gBHt8EXxS6T6tJRTGuDQVnluuAvMxWF4j8SNFDKceLFg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script> --}}

    <!-- Icons. Uncomment required icon fonts -->
    <link rel="stylesheet" href="/admin/assets/vendor/fonts/boxicons.css" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="/admin/assets/vendor/css/core.css" class="template-customizer-core-css" />
    <link rel="stylesheet" href="/admin/assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="/admin/assets/css/demo.css" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="/admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

    <link rel="stylesheet" href="/admin/assets/vendor/libs/apex-charts/apex-charts.css" />

    <!-- Page CSS -->

    <!-- Helpers -->
    {{-- <script src="{{ asset("/admin/assets/vendor/js/helpers.js")}}"></script> --}}

    {{-- <link rel="stylesheet" href="/admin/assets/vendor/css/style.css"> --}}

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{ asset('/admin/assets/js/config.js') }}"></script>

    <style>
        #app {
            width: 100% !important;
        }

        .btn-primary,
        .bg-primary {
            color: #fff;
            background-color: #696cff !important;
            border-color: #696cff !important;
            box-shadow: 0 0.125rem 0.25rem 0 rgba(105, 108, 255, 0.4);
        }

        .btn.btn-primary:hover {
            color: #fff;
            background-color: #0069d9 !important;
            border-color: #0062cc !important;
        }

        .ftco-navbar-light .navbar-brand,
        .heading-section .subheading {
            color: #696cff !important;
        }

        .ftco-navbar-light.scrolled .nav-item.cta>a,
        .product .img-prod span.status {
            background-color: #696cff !important;
        }

        .cart {
            position: fixed;
            right: 0;
            top: 98px;
            z-index: 10000;
        }
    </style>
    <style>
        @keyframes scrollTop {
            0% {
                bottom: -200px;
                opacity: 0;
            }

            10% {
                bottom: -180px;
                opacity: 0.1;
            }

            20% {
                bottom: -160px;
                opacity: 0.2;
            }

            30% {
                bottom: -140px;
                opacity: 0.3;
            }

            40% {
                bottom: -120px;
                opacity: 0.4;
            }

            50% {
                bottom: -100px;
                opacity: 0.5;
            }

            60% {
                bottom: -80px;
                opacity: 0.6;
            }

            70% {
                bottom: -60px;
                opacity: 0.7;
            }

            80% {
                bottom: -40px;
                opacity: 0.8;
            }

            90% {
                bottom: -20px;
                opacity: 0.9;
            }

            100% {
                bottom: 0;
                opacity: 1;
            }
        }

        @keyframes scrollTopRemove {
            0% {
                bottom: 0;
                opacity: 1;
            }

            20% {
                bottom: 20px;
                opacity: 0.8;
            }

            40% {
                bottom: 40px;
                opacity: 0.6;
            }

            60% {
                bottom: 60px;
                opacity: 0.4;
            }

            80% {
                bottom: 80px;
                opacity: 0.2;
            }

            100% {
                bottom: 100px;
                opacity: 0;
            }
        }
    </style>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased goto-here">
    @inertia
    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    {{-- <script src="../admin/assets/vendor/libs/jquery/jquery.js"></script>
    <script src="../admin/assets/vendor/libs/popper/popper.js"></script>
    <script src="../admin/assets/vendor/js/bootstrap.js"></script>
    <script src="../admin/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    <script src="../admin/assets/vendor/js/menu.js"></script>
    <!-- endbuild -->

    <!-- Vendors JS -->
    <script src="../admin/assets/vendor/libs/apex-charts/apexcharts.js"></script>

    <!-- Main JS -->
    <script src="../admin/assets/js/main.js"></script>

    <!-- Page JS -->
    <script src="../admin/assets/js/dashboards-analytics.js"></script>

    <!-- Place this tag in your head or just before your close body tag. -->
    <script async defer src="https://buttons.github.io/buttons.js"></script> --}}
</body>

</html>
