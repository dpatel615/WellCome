const router = require('express').Router();
const { JournalEntry } = require('../../models');
const withAuth = require('../../utils/auth');

// // GET route for journal entry
router.get('/', async (req, res) => {
  // Once user types entries and submits, GET data
  try {
    const entryArr = await JournalEntry.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    // console.log(entryArr);
    const entries = entryArr.map((entry) => entry.get({ plain: true }));
    res.render('profile', {
      entries,
      profile: true,
      logged_in: req.session.logged_in
    });
    // res.status(200).json(entries);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Default POST route for journal entry
router.post('/', withAuth, async (req, res) => {
  try {
    const newEntry = await JournalEntry.create({
      ...req.body,
      // logged_in: req.session.user_id, 
      user_id: req.session.user_id,

    });

    res.status(200).json(newEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Default DELETE route for journal entry

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const journalEntries = await JournalEntry.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(journalEntries);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;