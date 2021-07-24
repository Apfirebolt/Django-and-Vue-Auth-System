# Django Vue Auth Boilerplate

## Project Briefing

This is a simple boilerplate to get you started with full stack applications using Vue and Django, Postgresql is used as database and tailwind css is used for UI components.

Tailwind component design is inspired from the website 
https://tailwindcomponents.com/

## Built With

* [Django](https://www.djangoproject.com/)
* [Vue JS](https://vuejs.org/)
* [Postgresql](https://www.postgresql.org/)
* [Tailwind CSS](https://tailwindcss.com/)

## Authors

* **Amit Prafulla (APFirebolt)** - (http://amitprafull.com/)

## Project setup

This project requires Postgresql to be installed on your system. As best practice you can create a new virtual environment and install the required packages from the 'requirements.txt' file.

On the frontend side of things go inside the frontend folder and run npm install, this would install vue and all the required libraries including Tailwind CSS.
```
npm install
npm run serve
```

For Django Backend, setup the database and run migrations. Finally, run the server using the manage command. 

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## Project Screenshots

Please find some of the screenshots of the application. Below is the screenshot of the Register page.

![alt text](./screenshots/1.png)

This shows login page.

![alt text](./screenshots/5.png)

The main dashboard page.

![alt text](./screenshots/3.png)

This shows page where data read from file uploaded would be displayed.

![alt text](./screenshots/2.png)