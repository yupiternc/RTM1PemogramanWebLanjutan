const { json } = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const absensiSchema = mongoose.Schema({
    NIM: String,
    Nama: String,
    Kelas: String,
    Kehadiran: Boolean
})
const absensiMahasiswa = mongoose.model("Absensi", absensiSchema)

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

mongoose.connect('mongodb+srv://dbAbsensi:dbAbsensiPassword@cluster0.stymm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err) throw err
    console.log("Telah Terconnect ke DataBase...");
})

app.get("/", (req, res) => {
    absensiMahasiswa.find().then(data => res.json(data))
})

app.post("/", (req, res) => {
    console.log(req.body)
    var NIM = req.body.NIM
    var Nama = req.body.Nama
    var Kelas = req.body.Kelas
    var Kehadiran = req.body.Kehadiran
    var absen = new absensiMahasiswa({ NIM: NIM, Nama: Nama, Kelas: Kelas, Kehadiran: Kehadiran })
    absen.save().then((data) => {
        res.send(data)
    })
});

app.listen(3000)