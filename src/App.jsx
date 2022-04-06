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
      </div>
      <section className="pos:relative z:1 pt:50px pb:50px bgz:cover bgp:center">
        <div className="container">
          <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1">
            <div className="col">
              <div className="c:#000 lh:1.5 bgc:rgba(0,0,0,0.04) p:15px p:20px@sm p:30px@md bdrs:20px">
                <div className="fz:pfs(30px,50px)">
                  <i className="fal fa-bow-arrow" />
                </div>
                <h2 className="m:0 mt:15px fz:pfs(18px,24px) fw:600!">
                  Curabitur ac porta sapien
                </h2>
                <div className="mt:10px op:0.8 fz:15px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  malesuada augue eu rhoncus vehicula
                </div>
                <a
                  href="/"
                  className="d:inline-block bxsh:none o:0 td:none p:13px_20px bdrs:10px bgc:#6257de c:#fff bgc:#3c2fc9|h trs:0.3s c:#fff|hover mt:20px fz:14px fw:600"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="col">
              <div className="c:#000 lh:1.5 bgc:rgba(0,0,0,0.04) p:15px p:20px@sm p:30px@md bdrs:20px">
                <div className="fz:pfs(30px,50px)">
                  <i className="fal fa-briefcase" />
                </div>
                <h2 className="m:0 mt:15px fz:pfs(18px,24px) fw:600!">
                  Sed placerat sed purus
                </h2>
                <div className="mt:10px op:0.8 fz:15px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  malesuada augue eu rhoncus vehicula
                </div>
                <a
                  href="/"
                  className="d:inline-block bxsh:none o:0 td:none p:13px_20px bdrs:10px bgc:#6257de c:#fff bgc:#3c2fc9|h trs:0.3s c:#fff|hover mt:20px fz:14px fw:600"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="col">
              <div className="c:#000 lh:1.5 bgc:rgba(0,0,0,0.04) p:15px p:20px@sm p:30px@md bdrs:20px">
                <div className="fz:pfs(30px,50px)">
                  <i className="fal fa-building" />
                </div>
                <h2 className="m:0 mt:15px fz:pfs(18px,24px) fw:600!">
                  Fusce elementum ullamcorper
                </h2>
                <div className="mt:10px op:0.8 fz:15px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  malesuada augue eu rhoncus vehicula
                </div>
                <a
                  href="/"
                  className="d:inline-block bxsh:none o:0 td:none p:13px_20px bdrs:10px bgc:#6257de c:#fff bgc:#3c2fc9|h trs:0.3s c:#fff|hover mt:20px fz:14px fw:600"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="col">
              <div className="c:#000 lh:1.5 bgc:rgba(0,0,0,0.04) p:15px p:20px@sm p:30px@md bdrs:20px">
                <div className="fz:pfs(30px,50px)">
                  <i className="fal fa-cloud-moon" />
                </div>
                <h2 className="m:0 mt:15px fz:pfs(18px,24px) fw:600!">
                  In bibendum aliquam erat
                </h2>
                <div className="mt:10px op:0.8 fz:15px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  malesuada augue eu rhoncus vehicula
                </div>
                <a
                  href="/"
                  className="d:inline-block bxsh:none o:0 td:none p:13px_20px bdrs:10px bgc:#6257de c:#fff bgc:#3c2fc9|h trs:0.3s c:#fff|hover mt:20px fz:14px fw:600"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
