export function Userlist() {
  const user = [
    {
      name: "HariSudhan",
      age: 20,
      address: "perambalur",
      profession: "Student",
    },
    {
      name: "SubaShree",
      age: 20,
      address: "perambalur",
      profession: "Student",
    },
    {
      name: "Ajeeth",
      age: 26,
      address: "Trichy",
      profession: "Work",
    },
    {
      name: "Priya",
      age: 28,
      address: "Bengalore",
      profession: "Work",
    },
    {
      name: "Tanvika",
      age: 19,
      address: "Namakkal",
      profession: "Student",
    },
  ];
  return (
    <div id="users">
      {user.map((users, id) => (
        <Displayuser user={users} id={id} key={id} />
      ))}
    </div>
  );
}

function Displayuser({ user, id }) {
  const { name, age, address, profession } = user;

  return (
    <div id="userdetials">
     {name}
      <br /> <br />
      Profession:{profession}
 
    </div>
  );
}
