---
layout: page
permalink: /contact
title: Contact met 40enfit en Theo van der Sluijs
comments: false
---



<form id="formulier">
  <div class="form-group">
        <label for="contact-name">Vertel maar, hoe heet je?</label>
        <input type="text" class="form-control" id="contact-name" placeholder="Naam" name="entry.1144255508" aria-describedby="contact-name-error">
        <p id="contact-name-error" class="help-block"></p>
  </div>
  <div class="form-group">
        <label for="contact-email">Hoe kan ik contact met je opnemen via e-mail?</label>
        <input type="email" class="form-control" id="contact-email" placeholder="E-mail" name="entry.476355214" aria-describedby="contact-email-error">
        <p id="contact-email-error" class="help-block"></p>
  </div>
  <div class="form-group">
        <label for="contact-purpose">Laat me weten hoe ik je kan helpen!</label>
        <textarea class="form-control" id="contact-message" placeholder="Bericht" name="entry.1239377501" aria-describedby="contact-purpose-error"></textarea>
        <p id="contact-purpose-error" class="help-block"></p>
  </div>
  <button type="submit" class="btn btn-default" id="contact-form-submit">Versturen</button>
</form>

<div id="form_success" style="display:none">Bedankt, we komen zo spoedig mogelijk op je vraag terug</div>
<div id="form_error" style="display:none">Oeps, er ging iets fout. Probeer het opnieuw, of laat een bericht achter op info[@]40enfit.nl</div>