const kategori = {}

kategori.getAll = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM kategori where id_kat', (err, kategori) => {
            if (err) {
                res.json(err);
            }
            res.render('kategori', {
                kategori: kategori
            });
            console.log(kategori);
        });
    });
}

kategori.post = (req, res) => {
    const kategori = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO kategori set ?', kategori, (err, buku) => {
        console.log(buku)
        res.redirect('/kategori');
      })
    })
  };


kategori.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM kategori WHERE id_kat = ?", [id], (err, rows) => {
            res.render('kategori_edit', {
                kategori: rows[0]
            })
        });
    });
};

kategori.update = (req, res) => {
    const { id } = req.params;
    const newkategoris = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE kategori set ? where id_kat = ?', [newkategoris, id], (err, rows) => {
            res.redirect('/kategori');
        });
    });
};

kategori.destroy = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM kategori WHERE id_kat = ?', [id], (err, rows) => {
            res.redirect('/kategori');
        });
    });
}

module.exports = kategori