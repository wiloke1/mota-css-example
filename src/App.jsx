function App() {
  return (
    <div>
      <div className="max-width:1000px m:auto">
        <h2>CSS ATOMIC</h2>
        <div className="pos:relative! p:10px d:block bd:2px_solid_red cnt:(after)|af cnt:(after_hover)|hover|af">
          <div className="c:color-primary c:#f00 c:rgba(255,255,255,0.6)! c:red|hover|after"></div>
          <h2 className="ml:50px c:red c:blue|h fz:pfs(20px,60px)">Title</h2>
          <div className="c:color-primary c:blue@+400px! c:green@sm fz:20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            quaerat.
          </div>
          <div className="mt:20px fz:16px c:red">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ipsum nihil debitis quod quaerat quae laboriosam officia maxime
            accusantium officiis?
          </div>
        </div>
      </div>
      <section className="pos:relative z:1 pt:50px pb:50px bgz:cover bgp:center">
        <div className="maw:1200px pl:15px pr:15px m:auto">
          <div className="d:flex flw:wrap ml:-15px mr:-15px mt:-30px">
            <div className="w:100% w:50%@sm w:33.33%@md w:25%@lg pl:15px pr:15px mt:30px">
              <div className="c:#000 lh:1.5 bgc:rgba(0,0,0,0.04) p:15px p:20px@sm p:30px@md bdrs:20px">
                <div className="fz:pfs(30px,50px)">
                  <i className="fal fa-bow-arrow" />
                </div>
                <h2 className="m:0 mt:15px fz:pfs(18px,24px) fw:600!">
                  Curabitur ac porta sapien
                </h2>
                <div className="mt:10px op:0.8 fz:15px lines-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  sunt a? Officiis delectus molestiae dolore ipsum impedit
                  facilis sapiente quis provident, eos ipsam magnam amet
                  corrupti temporibus nesciunt voluptate, reiciendis consequatur
                  dicta incidunt maiores inventore? Eveniet atque enim at ipsum
                  architecto consequatur non dolore accusamus. Odio eum
                  architecto, aliquam autem tempore blanditiis vero, laboriosam
                  distinctio nobis nulla quisquam soluta, minima placeat
                  asperiores deleniti. Placeat reprehenderit illo voluptatum,
                  maxime neque recusandae est quam saepe sint optio suscipit cum
                  eaque harum ipsam perspiciatis modi, vero voluptate soluta
                  voluptas tenetur? Voluptatum aliquam aspernatur accusantium
                  perspiciatis voluptate, vel magni. Consequatur at incidunt
                  corporis quasi.
                </div>
                <a
                  href="/"
                  className="d:inline-block bxsh:none o:0 td:none p:13px_20px bdrs:10px bgc:#6257de c:#fff bgc:#3c2fc9|h trs:0.3s c:#fff|hover mt:20px fz:14px fw:600"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="w:100% w:50%@sm w:33.33%@md w:25%@lg pl:15px pr:15px mt:30px">
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
            <div className="w:100% w:50%@sm w:33.33%@md w:25%@lg pl:15px pr:15px mt:30px">
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
            <div className="w:100% w:50%@sm w:33.33%@md w:25%@lg pl:15px pr:15px mt:30px">
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
      <section className="pos:relative z:1 pt:50px pb:50px bgz:cover bgp:center">
        <div className="maw:1200px pl:15px pr:15px m:auto">
          <div className="d:flex flw:wrap ml:-15px mr:-15px mt:-30px">
            <div className="w:100% w:50%@sm w:33.33%@md w:33.33%@lg pl:15px pr:15px mt:30px">
              <div className="group* c:#000 lh:1.5">
                <div className="pos:relative pr:56px">
                  <div className="ov:hidden">
                    <div
                      className="pt:120% bgp:center bgz:cover trf:scale(1.1)_rotate(2deg)*group-hover trs:0.5s"
                      style={{
                        backgroundImage: `url('https://img.freepik.com/free-photo/handsome-smiling-bearded-man-glasses-working-laptop_285396-9847.jpg?w=2000')`,
                      }}
                    ></div>
                  </div>

                  <div className="pos:absolute t:0 r:0">
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-facebook fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-twitter fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-instagram fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-linkedin fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                  </div>
                </div>

                <div className="p:20px_56px_0_0 pos:relative z:9">
                  <h2 className="m:0 fz:pfs(14px,16px) lts:1px tt:uppercase fw:600!">
                    Monique Greer
                  </h2>

                  <div className="mt:10px op:0.8 fz:15px c:#444">
                    Phasellus consectetur nisl quis leo facilisis, a fringilla
                    risus posuere. Nullam felis urna, aliquam et
                  </div>

                  <div className="d:flex ai:center jc:flex-end mt:20px">
                    <div className="w:40px h:1px bgc:#ccc"></div>
                    <div className="fz:13px c:#444 ml:10px">Web Developer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w:100% w:50%@sm w:33.33%@md w:33.33%@lg pl:15px pr:15px mt:30px">
              <div className="group* c:#000 lh:1.5">
                <div className="pos:relative pr:56px">
                  <div className="ov:hidden">
                    <div
                      className="pt:120% bgp:center bgz:cover trf:scale(1.1)_rotate(2deg)*group-hover trs:0.5s"
                      style={{
                        backgroundImage: `url('https://img.freepik.com/free-photo/handsome-busy-focused-man-shirt-sitting-relaxed-sofa-home-table-working-online-laptop-from-home_285396-9990.jpg?w=2000')`,
                      }}
                    ></div>
                  </div>

                  <div className="pos:absolute t:0 r:0">
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-facebook fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-twitter fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-instagram fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-linkedin fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                  </div>
                </div>

                <div className="p:20px_56px_0_0 pos:relative z:9">
                  <h2 className="m:0 fz:pfs(14px,16px) lts:1px tt:uppercase fw:600!">
                    Victor Hansen
                  </h2>

                  <div className="mt:10px op:0.8 fz:15px c:#444">
                    Phasellus consectetur nisl quis leo facilisis, a fringilla
                    risus posuere. Nullam felis urna, aliquam et
                  </div>

                  <div className="d:flex ai:center jc:flex-end mt:20px">
                    <div className="w:40px h:1px bgc:#ccc"></div>
                    <div className="fz:13px c:#444 ml:10px">Designer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w:100% w:50%@sm w:33.33%@md w:33.33%@lg pl:15px pr:15px mt:30px">
              <div className="group* c:#000 lh:1.5">
                <div className="pos:relative pr:56px">
                  <div className="ov:hidden">
                    <div
                      className="pt:120% bgp:center bgz:cover trf:scale(1.1)_rotate(2deg)*group-hover trs:0.5s"
                      style={{
                        backgroundImage: `url('https://img.freepik.com/free-photo/young-happy-asian-woman-home_52476-139.jpg?w=2000')`,
                      }}
                    ></div>
                  </div>

                  <div className="pos:absolute t:0 r:0">
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-facebook fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-twitter fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-instagram fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                    <a href="/" className="d:block td:none!">
                      <i className="fab fa-linkedin fz:18px bgc:#eee c:#000 bgc:#000|h c:#fff|h w:46px h:46px d:flex jc:center ai:center mb:10px trs:0.3s"></i>
                    </a>
                  </div>
                </div>

                <div className="p:20px_56px_0_0 pos:relative z:9">
                  <h2 className="m:0 fz:pfs(14px,16px) lts:1px tt:uppercase fw:600!">
                    Pierre Hackett
                  </h2>

                  <div className="mt:10px op:0.8 fz:15px c:#444">
                    Phasellus consectetur nisl quis leo facilisis, a fringilla
                    risus posuere. Nullam felis urna, aliquam et
                  </div>

                  <div className="d:flex ai:center jc:flex-end mt:20px">
                    <div className="w:40px h:1px bgc:#ccc"></div>
                    <div className="fz:13px c:#444 ml:10px">
                      Project Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
