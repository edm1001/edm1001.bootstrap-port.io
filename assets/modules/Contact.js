const Contact =  () => {
    return `
    <section id="contact">
        <div class="container">
            <h3 class="text-center fw-bold main-title">Contact Me</h3>
        </div>
        <div class="row gx-5 mt-5">
            <div class="col-lg-6 text-center">
                <div class="contact-bg d-flex flex-column justify-content-center rounded-2">
                    <h4 class="py-4"> Contact me through my website</h4>
                    <div class="contact-info d-flex flex-column gap-2 text-center">
                        <a href="tel:9563720283" class="text-white"><i class="bi bi-telephone-fill me-3"></i>123 456 7890</a>
                        <a href="mailto:edmer_franciz@yahoo.com" class="text-white"><i class="bi bi-envelope-fill me-3"></i>edmer_franciz@yahoo.com</a>
                        <a href="#" class="text-white"><i class="bi bi-geo-alt me-3"></i>Spring, Texas</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-5 mt-4">
                <form>
                    <div class="mb-3">
                      <input type="text" class="form-control" id="Name" placeholder="Full Name">
                    </div>
                    <div class="mb-3">
                      <input type="email" class="form-control" id="email" placeholder="Email Address">
                    </div>
                    <div class="mb-3">
                      <input type="text" class="form-control" id="subject" placeholder="Subject">
                    </div>
                    <div class="mb-3">
                      <textarea class="form-control" placeholder="Enter Your Message Here" id="floatingTextarea" rows="8" ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                  </form>
                

            </div>
        </div>
    </section>
    `
}

export default Contact;

// document.getElementById('contact').innerHTML = App();