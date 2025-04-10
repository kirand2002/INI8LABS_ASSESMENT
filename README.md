# INI8LABS_ASSESMENT

#project structure

registration_project/
│
├── backend/
│   ├── registration_project/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   ├── registration/                   # app folder
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   └── views.py
│   │
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── script.js
│   │
│   ├── templates/
│   │   └── index.html
│   │
│   ├── manage.py
│   └── db.sqlite3
│
├── README.md
└── requirements.txt


📝 Project: Django Registration App

📁 Project Structure (Recap)
cpp
Copy
Edit
registration_project/
│
├── backend/
│   ├── registration_project/
│   ├── registration/            ← Django app
│   ├── static/                  ← CSS & JS
│   ├── templates/               ← index.html
│   ├── manage.py
│   └── db.sqlite3 (auto-generated)
├── README.md
└── requirements.txt



⚙️ Installation Guide
✅ Prerequisites
Make sure you have the following installed:

Python 3.8 or later

pip (Python package manager)

Virtual environment (recommended): venv

Git (optional, for cloning)

🔹 Step 1: Clone the Project (or download it)
bash
Copy
Edit
git clone https://github.com/your-username/registration_project.git
cd registration_project/backend

🔹 Step 2: Create & Activate Virtual Environment
Windows:

bash
Copy
Edit
python -m venv venv
venv\Scripts\activate
macOS/Linux:

bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate

🔹 Step 3: Install Dependencies
bash
Copy
Edit
pip install -r ../requirements.txt
If requirements.txt doesn’t exist yet, generate it:

bash
Copy
Edit
pip freeze > ../requirements.txt

🔹 Step 4: Run Initial Migrations
bash
Copy
Edit
python manage.py makemigrations
python manage.py migrate

🔹 Step 5: Run Development Server
bash
Copy
Edit
python manage.py runserver
Visit http://127.0.0.1:8000 in your browser.

🔹 Step 6 (Optional): Create Superuser (for admin access)
bash
Copy
Edit
python manage.py createsuperuser

📦 Folder Descriptions

Folder/File	Description

registration/	Django app with models & views

static/	CSS and JS files

templates/	HTML templates

serializers.py	For API serialization (DRF)

manage.py	Django CLI script
