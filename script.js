document.addEventListener("DOMContentLoaded", function () {


  /* ================= YEAR ================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ================= SMOOTH SCROLL ================= */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const id = this.getAttribute("href");

      if (!id || id === "#") {
        return;
      }

      const target = document.querySelector(id);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* ================= FEEDBACK ================= */

  const feedbackForm =
    document.getElementById("feedbackForm");

  const feedbackStatus =
    document.getElementById("feedbackStatus");


  if (feedbackForm) {

    feedbackForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const name =
          document
            .getElementById("feedbackName")
            .value
            .trim();


        const email =
          document
            .getElementById("feedbackEmail")
            .value
            .trim();


        const message =
          document
            .getElementById("feedbackMessage")
            .value
            .trim();


        if (!name || !message) {

          feedbackStatus.textContent =
            "Please enter your name and feedback.";

          return;

        }


        const subject =
          encodeURIComponent(
            "Owais Visuals Portfolio Feedback"
          );


        const body =
          encodeURIComponent(

            "Name: " +
            name +

            "\nEmail: " +
            (email || "Not provided") +

            "\n\nFeedback:\n" +
            message

          );


        const mailto =
          "mailto:owaisimran780@gmail.com" +
          "?subject=" +
          subject +
          "&body=" +
          body;


        feedbackStatus.textContent =
          "Opening your email app...";


        window.location.href = mailto;

      }
    );

  }


  /* ================= VIDEO ERROR HANDLING ================= */

  document
    .querySelectorAll("video")
    .forEach(function (video) {

      video.addEventListener(
        "error",
        function () {

          const box =
            video.parentElement;


          if (box) {

            box.innerHTML = `
              <div style="
                width:100%;
                height:100%;
                min-height:200px;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#666;
                text-align:center;
                padding:30px;
                background:#050505;
              ">
                Video could not be loaded.
              </div>
            `;

          }

        }
      );

    });


  /* ================= IMAGE ERROR HANDLING ================= */

  document
    .querySelectorAll("img")
    .forEach(function (image) {

      image.addEventListener(
        "error",
        function () {

          image.style.display = "none";

          const parent =
            image.parentElement;


          if (parent) {

            parent.innerHTML = `
              <div style="
                width:100%;
                height:100%;
                min-height:200px;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#555;
                text-align:center;
                padding:30px;
              ">
                Image unavailable
              </div>
            `;

          }

        }
      );

    });

});