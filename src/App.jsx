import { styles } from "./moduleStyles";

function App() {
  return (
    <div className="max-width:1000px m:auto">
      <h2>CSS ATOMIC</h2>
      <div class="test-abc pos:relative! p:10px d:block bd:2px_solid_red cnt:'after'|af cnt:'after_hover'|hover|af">
        <div class="c:color-primary c:#f00 c:rgba(255,255,255,0.6)! c:red|hover|after"></div>
        <h2 class="c:red c:blue|h fz:pfs(20px,60px)">Title</h2>
        <div class="c:color-primary c:blue@+400px! c:green@sm fz:20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          quaerat.
        </div>
        <div class="margin-top:20px font-size:16px color:red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum
          nihil debitis quod quaerat quae laboriosam officia maxime accusantium
          officiis?
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
  );
}

export default App;
