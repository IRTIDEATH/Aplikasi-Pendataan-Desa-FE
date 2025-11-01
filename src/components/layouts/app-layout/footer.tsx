import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <svg
        className="w-full"
        viewBox="0 0 1280 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1280 17.9056L1258.67 16.4047C1237.33 14.9039 1194.67 11.9023 1152 21.2073C1109.33 30.6124 1066.67 52.2242 1024 59.6282C981.333 66.9322 938.667 59.9283 896 48.9224C853.333 37.9164 810.667 22.9083 768 26.4102C725.333 29.9121 682.667 51.924 640 52.2242C597.333 52.6244 554.667 31.2128 512 17.9056C469.333 4.59834 426.667 -0.804583 384 0.0959055C341.333 0.89634 298.667 7.90014 256 20.607C213.333 33.2139 170.667 51.6238 128 54.7255C85.3333 57.9272 42.6666 45.9207 21.3333 39.9175L0 33.9142V192H21.3333C42.6666 192 85.3333 192 128 192C170.667 192 213.333 192 256 192C298.667 192 341.333 192 384 192C426.667 192 469.333 192 512 192C554.667 192 597.333 192 640 192C682.667 192 725.333 192 768 192C810.667 192 853.333 192 896 192C938.667 192 981.333 192 1024 192C1066.67 192 1109.33 192 1152 192C1194.67 192 1237.33 192 1258.67 192H1280V17.9056Z"
          fill="#D8DEE9"
        />
        <path
          d="M0 55.9951L30.5778 50.2948C61.1556 44.6946 122.311 33.2942 183.182 38.1944C244.196 42.9946 304.782 63.9953 365.796 67.4955C426.667 70.9956 487.822 56.9951 548.693 61.7952C609.707 66.6954 670.293 90.2963 731.307 103.997C792.178 117.697 853.333 121.297 914.204 107.997C975.218 94.6965 1035.8 64.2953 1096.82 57.2951C1157.69 50.2948 1218.84 66.6954 1249.42 74.7957L1280 82.996V192H1249.42C1218.84 192 1157.69 192 1096.82 192C1035.8 192 975.218 192 914.204 192C853.333 192 792.178 192 731.307 192C670.293 192 609.707 192 548.693 192C487.822 192 426.667 192 365.796 192C304.782 192 244.196 192 183.182 192C122.311 192 61.1556 192 30.5778 192H0V55.9951Z"
          fill="#A3BE8C"
          stroke="#A3BE8C"
        />
      </svg>
      <div className="px-8 pb-10 md:px-12 bg-primary">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4 text-nord6">
            <span className="text-xl sm:text-2xl font-semibold">IPeda</span>
            <p className="text-sm sm:text-lg w-full max-w-88 mt-2">
              Aplikasi ini dibangun untuk mendukung sistem informasi pengelolaan
              data desa.
            </p>
            <blockquote className="text-sm sm:text-lg">
              Dibuat dengan ❤️ oleh{" "}
              <Link
                href="https://github.com/IRTIDEATH"
                className="text-chart-2 hover:underline"
              >
                {" "}
                IRTIDEATH{" "}
              </Link>{" "}
              & <span className="text-chart-2">Kontributor</span> hebat.
            </blockquote>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
