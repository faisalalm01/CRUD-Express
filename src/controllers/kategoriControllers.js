const kategori = {}

kategori.getAll = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM kategori', (err, kategori) => {
            if (err) {
                res.json(err);
            }
            res.render('kategori', {
                kategori: kategori
            });
        });
    });
}
kategori.post = (req, res) => {
    req.getConnection((err, conn) => {
        const query = conn.query('INSERT INTO kategori set ?', kategori, (err, kategori) => {
            console.log(kategori)
            res.redirect('/');
        })
    })
}

kategori.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM kategori WHERE id_kat = ?", [id], (err, rows) => {
            res.render('kategori_edit', {
                data: rows[0]
            })
        });
    });
};

kategori.update = (req, res) => {
    const { id } = req.params;
    const newkategoris = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE kategori set ? where id_kat = ?', [newkategoris, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

kategori.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM kategori WHERE id_kat = ?', [id], (err, rows) => {
            res.redirect('/kategori');
        });
    });
}

module.exports = kategori