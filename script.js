window.onload = function () {

    const TypeWriter = function (txtElement, words) {
        this.txtElement = txtElement; // text element container // 
        this.words = words; // [frontend developer]
        this.txt = ""; // current showing words
        this.wordIndex = 0; // the index of currently showing word
        this.type();
        this.isDeleting = false; // the word is deleted or typed
    }



    TypeWriter.prototype.type = function () {
        //current index of word
        const current = this.wordIndex % this.words.length; // for continuous typing and deleting a loop
        // get full text of current word
        const fullTxt = this.words[current];

        // check if deleting
        if (!this.isDeleting) {
            // add char
            this.txt = fullTxt.substring(0, this.txt.length + 1); // adding one by one word


        } else {
            // remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1); // removing one by one word
        }

        // insert text into element
        this.txtElement.innerText = this.txt;

        // Initial type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;   // the deleting speed of each word is  2x of typing speed
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
        }

        setTimeout(() => this.type(), typeSpeed);
    }

    function typing() {
        const txtElement = document.querySelector('.typing');
        const words = ['Frontend Developer'];
        new TypeWriter(txtElement, words);
    }

    typing();  // first step

    window.addEventListener('scroll', () => {
        // sticky navbar on scroll script
        if (window.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }

        // scroll-up button show/hide script

        if (window.scrollY > 500) {
            document.querySelector('.scroll-up-btn').classList.add("show");
        } else {
            document.querySelector('.scroll-up-btn').classList.remove("show");
        }
    });

    document.querySelector('#scroll').addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

}









