import { styles } from "./moduleStyles";

function App() {
  return (
    <div>
      <div className="max-width:1000px m:auto">
        <h2>CSS ATOMIC</h2>
        <div class="test-abc pos:relative! p:10px d:block bd:2px_solid_red cnt:'after'|af cnt:'after_hover'|hover|af">
          <div class="c:color-primary c:#f00 c:rgba(255,255,255,0.6)! c:red|hover|after"></div>
          <h2 class="ml:50px c:red c:blue|h fz:pfs(20px,60px)">Title</h2>
          <div class="c:color-primary c:blue@+400px! c:green@sm fz:20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            quaerat.
          </div>
          <div class="margin-top:20px font-size:16px color:red">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ipsum nihil debitis quod quaerat quae laboriosam officia maxime
            accusantium officiis?
          </div>
        </div>
        <h2>CSS MODULE</h2>
        <div className={styles.container}>
          <h3 className={styles.title}>Module title</h3>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            laudantium!
          </div>
        </div>
      </div>
      <section className="pos:relative z:1 pt:50px pb:50px bgz:cover bgp:center">
        <div className="container">
          <div className="ta:center mb:20px">
            <h2>Products ( Atomic css )</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet .
            </div>
          </div>
          <div
            component="content"
            className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 row-cols-1"
          >
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/Womens-pants-black-1_WEB_400x.jpg?v=1634091629"
                        alt="Levi's Commuter Skinny Jeans"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Levi's Commuter Skinny Jeans
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $88
                    </ins>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/pure-fix-softball-tee-web-2_400x.jpg?v=1634091396"
                        alt="Pure Fix 1940's Softball Jersey"
                      />
                    </div>
                  </a>
                </div>
                <span className="pos:absolute t:20px l:20px pt:4px pr:10px pb:4px pl:10px bgc:#ff5656 c:color-light bdrs:4px">
                  Sale
                </span>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix 1940's Softball Jersey
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $20
                    </ins>
                    <del className="p:2px">$25</del>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/seamless-women-tee_400x.jpg?v=1634091072"
                        alt="Pure Fix 1940's Lady Tee"
                      />
                    </div>
                  </a>
                </div>
                <span className="pos:absolute t:20px l:20px pt:4px pr:10px pb:4px pl:10px bgc:#ff5656 c:color-light bdrs:4px">
                  Sale
                </span>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix 1940's Lady Tee
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $16
                    </ins>
                    <del className="p:2px">$20</del>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/button-down-mech-tee_400x.jpg?v=1634091040"
                        alt="Pure Fix Mechanic Shirt"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix Mechanic Shirt
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $40
                    </ins>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/gray_shirt_black_wing_3_400x.jpg?v=1634090859"
                        alt="Pure Fix Tribal Tee"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix Tribal Tee
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $20
                    </ins>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/shirt_1_400x.png?v=1634090793"
                        alt="Pure Fix Wing Tee"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix Wing Tee
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $20
                    </ins>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/hoodie_1201_400x.jpg?v=1634090789"
                        alt="Pure Fix 1940's Zip Hoodie"
                      />
                    </div>
                  </a>
                </div>
                <span className="pos:absolute t:20px l:20px pt:4px pr:10px pb:4px pl:10px bgc:#ff5656 c:color-light bdrs:4px">
                  Sale
                </span>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix 1940's Zip Hoodie
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $32
                    </ins>
                    <del className="p:2px">$40</del>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/Tshirt_Pure-Fix_Black_Front_WEB_400x.jpg?v=1634090777"
                        alt="Pure Fix 1940's Tee"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix 1940's Tee
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $20
                    </ins>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/raglan_1201_400x.jpg?v=1634090771"
                        alt="Pure Fix 1940's Pullover"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Pure Fix 1940's Pullover
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $40
                    </ins>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pos:relative p:10px ta:center bdrs:10px bd:1px_solid_color-gray2 h:100%">
                <div className="bdrs:10px ov:hidden">
                  <a href="/">
                    <div className="core-image-cover">
                      <img
                        className="trf:scale(1.2)|hover trs:all_0.4s_ease"
                        src="https://cdn.shopify.com/s/files/1/0550/4260/5277/products/man-adjusts-blue-tuxedo-bowtie_925x_f8d01756-6827-4fa6-b682-4c4a2ee2285d_400x.jpg?v=1634009326"
                        alt="Blue Silk Tuxedo"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <h2 className="fz:16px mt:10px mb:10px">
                    <a href="/" className="fw:600 c:color-gray9">
                      Blue Silk Tuxedo
                    </a>
                  </h2>
                  <div className="fz:14px c:#feaa01">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="mt:10px">
                    <ins className="fz:20px fw:700 c:color-primary td:none p:2px">
                      $70
                    </ins>
                  </div>
                  <a
                    className="core-btn core-btn--primary bdrs:30px h:40px miw:160px mt:10px mb:15px"
                    href="/"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt:30px mt:40px@sm ta:center">
            <a
              className="core-btn core-btn--border p:20px pt:8px bdrs:40px pb:8px miw:160px"
              href="/"
              target="_self"
            >
              View All
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
