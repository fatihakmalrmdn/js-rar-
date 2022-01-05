function login(e) {
    e.preventDefault()
    const nama = document.getElementById("nama").value
    const pass = document.getElementById("pass").value
    if (nama == "siti2003" && pass == "maemunah") {
        alert("Login Sukses")
        location.href = "sukses.html"
    }
    else {
        alert("Login Gagal")
        window.Location.reload()
    }
}