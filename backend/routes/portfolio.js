const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use('/images', express.static(path.join(__dirname, 'uploads/images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const clientName = req.body.ClientName.replace(/\s+/g, '_'); // Replace spaces with underscores for the filename
    const filename = `${clientName}-${Date.now()}${ext}`; // Use ClientName and timestamp for filename
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Get Portfolio Images
router.get('/portfolio', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch portfolio', error: err.message });
  }
});

// Add a New Portfolio Item
router.post('/portfolio', upload.single('logo'), async (req, res) => {
  const { ClientName, SiteLink, Phone } = req.body;

  if (!ClientName || !SiteLink || !Phone || !req.file) {
    return res.status(400).json({ message: 'All fields are required, including logo' });
  }

  const Logo = req.file.filename; // The renamed image filename
  const Path = `http://192.168.1.7:5000/images/${Logo}`; // Path to the image file

  try {
    const newClient = new Client({ ClientName, SiteLink, Logo, Phone, Path });
    const savedClient = await newClient.save();
    res.json({ message: 'Portfolio item added successfully', id: savedClient._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add portfolio item', error: err.message });
  }
});

// Delete a Portfolio Item by ID
router.delete('/portfolio/:id', async (req, res) => {
  const clientId = req.params.id;

  try {
    // Find the client by ID
    const client = await Client.findById(clientId);

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    // Get the path of the logo to be deleted
    const logoPath = path.join(__dirname, 'uploads/images', client.Logo);

    // Delete the logo file
    fs.unlink(logoPath, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to delete image file', error: err.message });
      }
    });

    // Delete the client from the database
    await Client.findByIdAndDelete(clientId);

    res.json({ message: 'Portfolio item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete portfolio item', error: err.message });
  }
});

module.exports = router;
