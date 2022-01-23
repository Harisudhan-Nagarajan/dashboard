export function Productlist() {
  const products = [
    {
      name: "Full Stack Developement",
      course_perdiod: "3 Months",
      fees: 750,
    },
    {
      name: "Data Science",
      course_perdiod: "3 Months",
      fees: 850,
    },
    {
      name: "Automation & Testing",
      course_perdiod: "3 Months",
      fees: 700,
    },
    {
      name: "CyberSecurity & Ethical Hacking",
      course_perdiod: "3 Months",
      fees: 600,
    },
  ];
  return (
    <div id="users">
      {products.map((product, id) => (
        <Productdetials product={product} key={id} />
      ))}
    </div>
  );
}

function Productdetials({ product }) {
  const { name, course_perdiod, fees } = product;

  return (
    <div>
      <div id="userdetials">
        {name}
        <br /> <br />
        {course_perdiod}
      </div>
    </div>
  );
}
