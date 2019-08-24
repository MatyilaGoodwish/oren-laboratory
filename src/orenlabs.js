/**
* Page constructor
* @param {*} template 
* @param {*} property 
*/

'use strict';

const layout = Object.seal({
    header: document.querySelector('[data-layout="header"]'),
    footer: document.querySelector('[data-layout="footer"]')
});
const views = Object.seal({
    dir: "pages/",
    content: document.querySelector('[data-content]')
});
const routerEventConfig = Object.seal({
    hash: "hashchange"
})



function Page(template, property) {
    return fetch(template).then((response) => {
        return response.text();
    }).then((data) => {
        property.innerHTML = data;
        return property;
    }).then((identifier) => {
        let compile$ = document.querySelector('[data-template]');
        if (compile$)
            eval(compile$.innerHTML);
        compile$.innerHTML = '';
    }).catch(error => {

    })
}



addEventListener(routerEventConfig.hash, function (e) {
    addEventListener(location.hash, function () {
        let filePath = location.hash.split("#/")[1];
        let fullFilePath = views.dir + filePath + ".html";
        new Page(fullFilePath.toString().toLowerCase(), views.content);

        console.log(fullFilePath.toString().toLowerCase());
    })
    dispatchEvent(new CustomEvent(location.hash));
});

new Page("pages/header.html", layout.header);
new Page("pages/footer.html", layout.footer);

/**
 * default
 */
location.replace("#/services");

document.normalize()


 
/*



(function () {
    const app = angular.module("orenlabs");



    app.controller("Admin", ["$cookies",
        function ($cookies) {

            this.shopright = {
                isDelivery: false,
                isTracking: true,
                isLoading: false,
                waybill: "",
                captureWaybill: function (waybillNumber) {
                    if (waybillNumber.toString().split("").length === 6) {
                        this.isLoading = true;
                        this.isTracking = false;
                        $cookies.put("shoprite-tillslip", waybillNumber);
                    } else {
                        swal("Slip Error", "Enter a slip/counter till number 6 digits", "error")
                    }
                }
            }









            //notifications
           // this.notifications = JSON.parse(localStorage['app-notifications'])


            //this.loginNotification = $cookies.get("login-notification");

            this.isUser = $cookies.get("user-active");

            this.signOut = function () {
                $cookies.remove("user-active");
                firebase.auth().signOut();
                sessionStorage.removeItem("user");
                window.location.replace("/");
            }

            //accounts
            this.credentials = {
                login: {
                    count: 0
                },
                loginAttempt: false,
                notification: "",
                user: {
                    email: this.email,
                    password: this.password
                },
                signIn: function () {
                    if (this.login.count < 3) {
                        let username = this.user.email;
                        let pass = this.user.password;
                        firebase.auth().onAuthStateChanged(function (user) {
                            if (user) {

                                $cookies.put("last-logon", new Date());
                                $cookies.put("user-active", true);
                                sessionStorage.setItem("user", JSON.stringify(user));
                                window.location.replace("/");
                            }

                        })


                        firebase.auth().signInWithEmailAndPassword(username, pass)
                            .catch(function (error) {
                                $cookies.put("login-notification", error.message);
                                swal("Account Information", error.message, "info");
                            })
                        this.login.count++;
                    } else {
                        swal("Login Information", "Too many login attempts", "error");
                    }


                }
            }


            this.page = {
                title: "Orenlabs",
                icon: "assets/logo1.png",
                auth: {
                    key: "auth.js",
                },
                ui: {
                    notifications: "lib/swal.js"
                },
                bootstrap: "css/bootstrap.css",
                common: "styles/kendo.common.min.css",
                uinterface: "styles/kendo.metro.min.css"
            }
            //<link rel="stylesheet" href="styles/kendo.common.min.css" />
            //<link rel="stylesheet" href="styles/kendo.metro.min.css" />

            //accounts model
            this.accounts = {
                isLoggedIn: false
            }


            //model
            this.about = {
                title: "About Us",
                content: `
                At Oren laboratories we develop solutions for enterprises such as process automation, business website application and cloud based solutions. We also work on open-source projects for many NGO's freely to assist also sponsor various projects.
            `
            };

            //contact
            this.contact = [
                {
                    icon: "../../assets/head.png",
                    title: "Head Quarters",
                    content: "5th Sturdee avenue, Rivonia, Gauteng, South Africa.",
                    extras: "Mon-Fri(7:00 - 16:00), General information and mail"
                },
                {
                    title: "Office Support",
                    content: "(087) 057-1581",
                    extras: "Support, Inquiries, New Accounts."
                },
                {
                    title: "Mobile Support",
                    content: "(084) 790-8653",
                    extras: "Goodwish Matyila"
                }
            ];



            //copyright information
            this.copyright = {
                content: "Oren Laboratories © 2019 - All rights reserved Reg. No: 2016/135921/07"
            }


            //services
            this.services = [
                {
                    graphic: "../../assets/ui.png",
                    title: "Front-End Development",
                    content: "We develop interactive website solutions that customers enjoy to use, user friendly for everyone mobile friendly and responsive.",
                    src: "#/quotation/request",
                    image: "assets/uptasker.png"
                },
                {
                    graphic: "../../assets/devops.png",
                    title: "Google Cloud Platform(DevOps)",
                    content: "We deploy developer platforms in GCP for various cloud computing, application deployment, dedicated IP and more including firebase servless computing",
                    src: "#/quotation/request",
                    image: "assets/uptasker.png"

                },
                {
                    graphic: "../../assets/angularjs.png",
                    title: "AngularJS Development",
                    content: "Building commercial applications for real world applications",
                    src: "#/quotation/request",
                    image: "assets/uptasker.png"

                },
                {
                    graphic: "../../assets/react.png",
                    title: "React Apps",
                    content: "React is powerful frameware for the rendering user-interfaces decouples the view from the MVC because react uses JavaScript and JSX we use it to develop client-side applications that are very fast and dynamic",
                    src: "#/quotation/request",
                    image: "assets/uptasker.png"

                }
            ]



            this.articles = [
                {
                    "title": "5 Reasons you should hire Angular Developer in South Africa",
                    "link": "https://www.linkedin.com/pulse/5-reasons-you-should-hire-angular-developer-south-africa-matyila/",
                    "image": "../../assets/article.png"
                },
                {
                    "title": "5 Benefits on Angular Development for Small Business in South Africa",
                    "link": "https://www.linkedin.com/pulse/5-benefits-angular-development-small-business-south-africa-matyila/",
                    "image": "../../assets/article.png"
                },
                {
                    "title": "Effective Angular Prototyping",
                    "link": "https://uptasker.co.za/blog/efficient-angular-prototyping/",
                    "image": "../../assets/uptasker.png"
                },
                {
                    "title": "Angular Business Notation",
                    "link": "https://www.linkedin.com/pulse/angular-business-notation-goodwish-matyila",
                    "image": "../../assets/article.png"
                },
                {
                    "title": "Why your new Angular website is not delivering the results as expected?",
                    "link": "https://www.linkedin.com/pulse/why-your-new-angular-website-delivering-results-expected-matyila/",
                    "image": "../../assets/article.png"
                },
                {
                    "title": "Successful strategies for a customer-facing website using Angular to reduce workloads & Increase revenue.",
                    "link": "https://www.linkedin.com/pulse/successful-strategies-customer-facing-website-using-angular-matyila/",
                    "image": "../../assets/article.png"
                },
                {
                    "title": " AngularJS or Angular How to choose for your business?",
                    "link": "https://www.linkedin.com/pulse/angularjs-angular-how-choose-your-business-goodwish-matyila/",
                    "image": "../../assets/article.png"
                }
            ]



        }])
}()) */