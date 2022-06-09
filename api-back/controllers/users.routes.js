const UserServices = require("../services/User.Services");

class RoutersUser {
  static async getAll(req, res) {
    const { error, data } = await UserServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getOne(req, res) {
    const { error, data } = await UserServices.getOne(req.params.id);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async createUser(req, res) {
    const { error, data } = await UserServices.createUser(req.body);
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async getLogin(req, res) {
    const { error, data } = await UserServices.getLogin(req.body);
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async getUpdate(req, res) {
    const { error, data } = await UserServices.getUpdate(
      req.params.id,
      req.body
    );
    if (error) {
      return res.status(400).send(data);
    }
    res.status(201).send(data);
  }

  static async removeUser(req, res) {
    const { error, data } = await UserServices.removeUser(req.params.id);
    if (error) {
      return res.status(400).send(data);
    }
    return res.status(202).send(data);
  }
}

// // routersUser.post("/register", (req, res, next) => {
// //   console.log(req.body, "req body");

// //   //ruta con asyc/await
// //   /*
// //  const newUser = new User(req.body);
// //  console.log(newUser, '          newuser')
// //  await newUser.save();
// //  res.send(newUser) */

// //   User.create(req.body)
// //     .then((newUser) => res.status(201).send(newUser))
// //     .catch((err) => console.log(err));
// // });

// routersUser.get('/all',async(req,res)=>{
//   const allUser= await User.find()

//   try {
//     res.status(200).send(allUser)
//   } catch (error) {
//     console.log(error)
//   }
// })

// routersUser.put("/:id", async (req, res) => {
//   const mod = await User.findByIdAndUpdate(req.params.id, {
//     name: req.body.name,
//   });
//   try {
//     res.status(202).send(mod);
//   } catch (err) {
//     console.log(err);
//   }
// });

// routersUser.get('/:id',async(req,res)=>{
//   const loginUser = await User.findById(req.params.id)
//   try {
//     res.status(200).send(loginUser)
//   } catch (error) {
//     console.log(error)
//   }
// })

//funciona faltaria determinar de donde saco el id{maxi/sabri}
// routersUser.delete('/:id', (req, res, next) => {
//     console.log(req.body)
//    User.findByIdAndRemove(req.params.id)
//         .then(data => res.status(200).send(data))
//         .cath(err => console.log(err))
// })

module.exports = RoutersUser;
