const books = {}

books.findAll = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query()
        conn.query('SELECT * FROM buku inner join kategori on buku.kategori = kategori.id_kat', (err, buku) => {
            if (err) {
                res.json(err);
            }
            res.render('books', {   
              data:buku
            })
        });
    });
};


books.create = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      // const sqlKategori = connection.query('SELECT * FROM kategori where id_kat = ?')
      const query = connection.query('INSERT INTO buku set ?', data, (err, buku) => {
        console.log(buku)
        res.redirect('/');
      })
    })
  };

  books.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM buku WHERE id = ?", [id], (err, rows) => {
        res.render('buku_edit', {
          data: rows[0]
        })
      });
    });
  };

  books.update = (req, res) => {
    const { id } = req.params;
    const newbooks = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE buku set ? where id = ?', [newbooks, id], (err, rows) => {
      res.redirect('/');
    });
    });
  };

  books.destoy = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM buku WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }

module.exports = books