function openAbout(){
    document.getElementsByClassName("menu__link--active")[0].classList.remove("menu__link--active");
    document.getElementById("aboutButton").classList.add("menu__link--active");
    document.getElementById("view").innerHTML = `

    <h1 align="center" class="title">Jane Zill L.I.C.S.W.</h1>
    <br>
    <div class="about">

    <div id="picDiv">
           <img id="janeImage" width="90%" src="images/janezill.jpg">
    </div>
    
    <div>
            <p>
            <br>Danish philosopher, Soren Kierkegaard, claimed, "Life can only be understood backwards but must be lived forwards."  I believe the "best" therapy takes advantage of our natural impulse to seek meaning by looking backward and forward, as well as inward and out, in service of a preferred future and a preferred self.<br>
            <br>I'm a Licensed Independent Clinical Social Worker (L.I.C.S.W.) and Certified Clinical Trauma Professional with over 30 years of experience working with individuals and families impacted by illness, disability, and psychosocial and traumatic stress.  I earned a master's degree from the University of Wisconsin-Madison, where I also earned a B.A. in philosophy and a Certificate in Women's Studies. I'm a clinical member of the American Diabetes Association.<br>
            <br>A client's right to self-determination is a core value within the social work profession. I value collaborative therapeutic relationships.<br>
            <br>I welcome the use of story, intuition, art, dreams, and history in therapy, and recognize that community resources are often helpful. I offer EMDR (Eye Movement Desensitization and Reprocessing), clinical hypnosis, and relaxation techniques to treat the effects of traumatic and chronic stress, and I incorporate life-span development, family systems, and social context perspectives. <br>
            <br>Scientific research confirms the importance of a 'person-in-environment' approach when understanding the origins of human problems, as up to 70% of the <b id="socLink" onclick="openSocial()">determinants of health</b> are outside of an individual's control.<br>
            </p>
    </div>
</div>`;
}

function openPres(){
    document.getElementsByClassName("menu__link--active")[0].classList.remove("menu__link--active");
    document.getElementById("presButton").classList.add("menu__link--active");

    document.getElementById("view").innerHTML = `<h1 align="center"><b>Presentations and Community Service</b></h1>

    <div>
        <h3>Presentations</h3>
        <ul>
            <li>"The Biopsychosocial Aspects of Diabetes," (Nov. 29, 2017), American Diabetes Association Senior Signature Series, York Senior Center, York, ME</li>
            <br>
            <li>"Depression, Diabetes, and Aging: A Triple Threat?" (June 14, 2017), American Diabetes Association Senior Signature Series, York Senior Center, York, ME</li>
            <br>
            <li>"The Ecology of Living Organ Donation: Identifying Vulnerabilities & Promoting Equity for Living Organ Donors," (2016), NASW-Spring Symposium in Framingham, MA</li>
            <br>
            <li>"Living Kidney Donation: Gift, Sacrifice, or Market Event?" (2012), NASW-MA Spring Symposium in Framingham, MA</li>
            <br>
            <li>"Global issues in Living Organ Donation" (2012), Masters of Science in Health (MSH), Inc. "Lunch Lecture Series" in Cambridge, MA</li>
            <br>
            <li>"Gender Issues in Clinical Settings" (1996 thru '99) in emeritus professor Liz Falvey's UNH Counseling & Guidance course, Multicultural and Gender Issues in the Counseling Setting, Durham, NH</li>
            <br>
            <li>"The Psychosocial Problems of Patients with Diabetes" (1999), APEX Group, Portsmouth Regional Hospital, Portsmouth, NH; Diabetes Center of New Hampshire, Concord, NH;  Exeter Hospital, Exeter, NH</li>
            <br>
            <li>"Recovery from Traumatic Stress: Analysis of Character Development and Action in The Color Purple" (1994) for UNH Professor Paula Salvio's research project, Study of Human Relations and Civic Responsibility, Durham, NH</li>
        </ul>
    
        <br><br>
    
        <h3>Community Service</h3>
    
        <br>
    
        <p><b>Public Member / Representative</b> (1/2007-6/2009)<p><br>
        <p>Living Donor Committee</p><br>
        <p>United Network for Organ Sharing</p><br>						
        <p>Organ Procurement Transplant Network (UNOS / OPTN)</p><br>
        <p>Richmond, VA</p><br>
    
        <br>
    
        <p><b>Advisory Board Member</b> (1999-2011)</p><br>
        <p>Center for Diabetes and Endocrinology<p><br>
        <p>Portsmouth Regional Hospital<p><br>
        
        <br>

        <p onclick="openNightOut()"><b>Therapists' Night Out</b> (2014-Present)</p><br>
        <p>Free peer supervision and support<p><br>
        <p>for mental health professionals.<p><br>
        
    
    
    </div>`;
}

function openNightOut(){
    document.getElementsByClassName("menu__link--active")[0].classList.remove("menu__link--active");
    document.getElementById("nightButton").classList.add("menu__link--active");

    document.getElementById("view").innerHTML = `<div id="nightContainer">
    <br>
    <h1 align="center" class="TNOtitle"><b>Therapists' Night Out</b></h1>

    <div class="TNO">
        <p class="TNO">Therapists' Night Out (TNO) is a free peer supervision, support, and educational group for mental health professionals that's been meeting eight times a year since 2014.
        </p>
        <br><br>
        <p class="TNO">Meetings typically include socializing, a presentation and discussion led by a colleague, and case consultation.
        </p>
        <br><br>
        <p class="TNO">
        As a consulting group, TNO utilizes a process that captures the expertise within the group.  After a case is presented, those who choose to provide consultation begin with this simple statement, "If this case was mine, it would be about..." This approach utilizes the depth of expertise within the group and creates a broad exchange of ideas and perspectives.
        </p>
        <br><br>
        <p class="TNO">
        TNO meets eight times a year, January-June, Sept & October, the second Thursday of the month.
        </p>
        <br><br>
        <p class="TNO">
        The group is open-ended. Attendance at every meeting is not a requirement.
        </p>
        <br><br>
        <p class="TNO">
        Contact Jane for more information: 603-436-4111
        </p>
        <br><br>

        <h3 class="TNOtitle"><b>TNO 202O topics and presenters</b></h3>
        <ul class="TNO">
            <li>Barbara Bowlus:  Forgiveness (April)</li>
            <li>Marianne Stigum: Unconscious Derivatives</li>
            <li>Robin Bellantone: Aspect of Treatment for Trauma</li>
            <li>Robbie Stanhope:  Psychopharmacology for Non-Medical Mental Health Professionals</li>
            <li>Alex Barbehenn:  Nutrition and Mental Health</li>
            <li>Bette Freedson:  The Use of Intuition in Psychotherapy (June)</li>
        </ul>

        <h3 class="TNOtitle">Past Topics Include:</h3>
        <p class="TNO">Depression and Medical Illness, The Opioid Crisis: Causes and Interventions, The Assessment and Treatment of Trauma, Mental Health and Nutrition, Health Benefits of Nature, Intuition and Psychotherapy, Working Respectfully with Transgender Clients, Mother Daughter Relationships, Emergency Mental Health: Crisis Debriefing, Demonstration of EMDR techniques, Demonstration of Hypnotic techniques, Elder Abuse</p>

    </div>
<div>
`;
}

function openSocial(){
    document.getElementsByClassName("menu__link--active")[0].classList.remove("menu__link--active");
    document.getElementById("socButton").classList.add("menu__link--active");

    document.getElementById("view").innerHTML = `<h1 align="center"><b>Social Determinants of Health</b></h1>
    <div>
        <div class="determinants">
                    <div id="detDescript">
                        <br><br><br>
                        <p class="socFacts">According to the World Health Organization, the social determinants of health are the conditions in which people are born, grow, live, work and age. These circumstances are shaped by the distribution of money, power, and resources at global, national, and local levels. Research has demonstrated that up to 70% of the determinants of health are outside of an individual's control. These social determinants impact everyone (click <a href="https://apps.who.int/iris/bitstream/handle/10665/44489/9789241500852_eng.pdf;jsessionid=6B76CA3D474B6CC333C0AF7367E3C1DF?sequence=1" target="_BLANK">here</a> for source).</p>                
                    </div>
        
                    <div>
                        <br><br><br>
                        <center><img id="detImage" src="images/determinants.jpg"></center>
                        <center><p><b>Percentage break down of the determinants of health</b></p></center>
                        <center><p><i>Source: The Center for Health Equity, Minnesota Department of Health</i></p></center>
                    </div>
        </div>

        <center><h2>These selected resources are a small representation of the impact of the social determinants of health </h4></center>
    
                    <ul>
                        <li><a target="_BLANK" href="https://www.healthcarefinancenews.com/node/139392">Seriously ill Medicare beneficiaries can face considerable financial hardship</a></li>
                        <li><a target="_BLANK" href="https://www.centerforhealthjournalism.org">Center for Health Journalism</a></li>
                        <li><a target="_BLANK" href="https://islivingorgandonationsafe.com">Is Living Organ Donation Safe?</a></li>
                        <li><a target="_BLANK" href="https://www.eurasiareview.com/19112019-majority-us-parents-cite-socioeconomic-factors-negatively-impact-their-families-health/">Majority US Parents Cite Socioeconomic Factors Negatively Impact Their Families' Health</a></li>
                        <li><a target="_BLANK" href="https://www.politico.com/story/2019/05/20/mike-pence-health-care-1331705">How Mike Pence's 'Indiana mafia' took over health care policy</a></li>
                        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=p3ly8cyWvkw">Where Have All the Flowers Gone? Joan Baez</a></li>
                        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=_SQ4ogstDVE">West Side Story "Somewhere"</a></li>
                        <li><a target="_BLANK" href="https://theintercept.com/2015/12/16/toxic-firefighting-foam-has-contaminated-u-s-drinking-water-with-pfcs/">Poisoning the Well: Toxic Fire Firefighting Foam has Contaminated U.S. Drinking Water</a></li>
                        <li><a target="_BLANK" href="https://www.psychology.org.au/for-the-public/Psychology-topics/Climate-change-psychology/Coping-with-climate-change-distress">Coping with climate change distress | APS</a></li>
                        <li><a target="_BLANK" href="https://care.diabetesjournals.org/content/41/6/1188">Food Insecurity, Food "Deserts," and Glycemic Control in Patients With Diabetes: A Longitudinal Analysis</a></li>
                        <li><a target="_BLANK" href="https://www.sciencedaily.com/releases/2018/08/180824150536.htm">Why polluted air may be a threat to your kidneys</a></li>
                        <li><a target="_BLANK" href="https://www.cbsnews.com/news/family-separation-1556-more-migrant-families-were-separated-under-trump-than-previously-known/">1,556 more migrant families were separated under Trump than previously known</a></li>
                        <li><a target="_BLANK" href="https://www.psychologytoday.com/us/blog/rhythms-recovery/201801/the-relationship-between-stresstrauma-diabetes-type-2">The Relationship Between Stress, Trauma & Diabetes Type 2</a></li>
                        <li><a target="_BLANK" href="https://www.cdc.gov/violenceprevention/childabuseandneglect/acestudy/index.html">Adverse Childhood Experiences: Centers for Disease Control and Prevention</a></li>
                        <li><a target="_BLANK" href="https://www2.deloitte.com/us/en/pages/life-sciences-and-health-care/articles/health-care-current-march26-2019.html?id=us%3A2pm%3A3pt%3Amdrnhlth%3Aeng%3Alshc%3A042019&itx[idio]=20762106&ito=1157&itq=2ab9df6f-b51f-43fd-ad8f-ec3d58807b2c">Want to improve the health of Medicare/Medicaid members?: Meet their socioeconomic needs</a></li>
                        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=3CR7EeK-zUA">Reese Witherspoon on the Abusive Relationship That Changed Her | SuperSoul Sunday | OWN - YouTube</a></li>
                        <li><a target="_BLANK" href="https://www.kidneynews.org/kidney-news/current-issue/environmental-pollutants-used-in-textiles-food-packaging-may-contribute-to-poor-kidney-health">Environmental Pollutants Used in Textiles, Food Packaging May Contribute to Poor Kidney Health</a></li>
                        <li><a target="_BLANK" href="https://publicintegrity.org/environment/man-vs-mosquito-public-health-war/">Man vs. mosquito: At the front lines of a public health war - Center for Public Integrity</a></li>
                        <li><a target="_BLANK" href="https://www.washingtonpost.com/national/2019/07/20/opioid-files/?arc404=true">Follow the Post's Investigation of the opioid epidemic</a></li>
                        <li><a target="_BLANK" href="https://www.kidneyfund.org/kidney-today/common-pollutant-may-harm-kidneys.html">Study finds common pollutants in the environment may harm your kidneys</a></li>
                        <li><a target="_BLANK" href="https://everytownresearch.org/gun-violence-america/">Gun Violence in America</a></li>
                        <li><a target="_BLANK" href="http://stakerchiro.com/low-t-linked-to-ibuprofen-use/">Low T Linked to Ibuprofen Use</a></li>
                        <li><a target="_BLANK" href="http://unh.edu/ccrc/pdf/CV350-InPress.pdf">Screening for adverse childhood experiences (ACEs): Cautions and Suggestions</a></li>
                        <li><a target="_BLANK" href="https://www.centerforhealthjournalism.org/2019/10/01/how-reporters-have-forgotten-one-greatest-civil-rights-advances-past-30-years">Reporters have forgotten one of the greatest civil rights advances in the past 30 years</a></li>
                        <li><a target="_BLANK" href="https://health2016.globalchange.gov">The Impact of Climate Change on Human Health in the United States: A Scientific Assessment</a></li>
                        <li><a target="_BLANK" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4827789/">Ethics Issues Arising in the Transition to Learning Health Care Systems: Results from Interviews with Leaders from 25 Health Systems</a></li>
                        <li><a target="_BLANK" href="https://www.eurasiareview.com/21082019-urban-stormwater-could-release-contaminants-to-ground-surface-waters/#.XV6hxqTOuLw.mailto">Urban Stormwater Could Release Contaminants To Ground, Surface Waters</a></li>
                        <li><a target="_BLANK" href="https://www.theverge.com/2019/10/24/20929337/care-algorithm-study-race-bias-health">A health care algorithm affecting millions is biased against black patients</a></li>
                        <li><a target="_BLANK" href="https://www.npr.org/2017/05/12/528098789/u-s-has-the-worst-rate-of-maternal-deaths-in-the-developed-world">U.S. Has The Worst Rate Of Maternal Deaths In The Developed World</a></li>
                        <li><a target="_BLANK" href="https://www.westhealth.org/to-err-is-human-a-fathers-search-for-the-truth/">To Err is Human: A Father's Search for the Truth</a></li>
                        <li><a target="_BLANK" href="https://www.eurasiareview.com/15102019-stress-during-pregnancy-may-affect-babys-sex-risk-of-preterm-birth/">Stress During Pregnancy May Affect Baby's Sex, Risk Of Preterm Birth</a></li>
                        <li><a target="_BLANK" href="https://www.vogue.com/article/eco-anxiety-grief-mental-health-climate-change">Why Climate Change Is Causing "Eco-Anxiety," Grief, and Mental Health Issues</a></li>
                        <li><a target="_BLANK" href="https://www.theepochtimes.com/consumer-alert-tylenols-empathy-killing-properties-confirmed-in-2nd-study_2893734.html">Consumer Alert: Tylenol's Empathy-Killing Properties Confirmed in 2nd Study</a></li>
                        <li><a target="_BLANK" href="https://www.teenvogue.com/story/how-trauma-impacts-your-body">How Trauma Impacts Your Body | Teen Vogue</a></li>
                        <li><a target="_BLANK" href="https://www.researchgate.net/publication/223990226_Childhood_Adversities_Increase_the_Risk_of_Psychosis_A_Meta-analysis_of_Patient-Control_Prospective-_and_Cross-sectional_Cohort_Studies">Childhood Adversities Increase the Risk of Psychosis: A Meta-analysis of Patient-Control, Prospective- and Cross-sectional Cohort Studies</a></li>
                        <li><a target="_BLANK" href="https://www.hsph.harvard.edu/magazine/magazine_article/america-is-failing-its-black-mothers/">America Is Failing It's Black Mothers</a></li>
                        <li><a target="_BLANK" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6088465/">Pursuing the Mission: How Homeless Veterans Manage Chronic Disease</a></li>
                        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=SuXlZ5PHK9I">Julian Casablancas+The Voidz - Human Sadness (Official Video) - YouTube</a></li>
                        <li><a target="_BLANK" href="https://atcmeetingabstracts.com/abstract/the-impact-of-hypertension-chronic-pain-and-fatigue-on-long-term-quality-of-life-after-living-kidney-donation/">The Impact of Hypertension, Chronic Pain, and Fatigue on Long-Term Quality of Life After Living Kidney Donation</a></li>
                        <li><a target="_BLANK" href="http://patientsafetyamerica.com">Patient Safety America</a></li>
                        <li><a target="_BLANK" href="https://youtu.be/HPLJuyULAZ8">The Making of An Alcoholic</a></li>
                        <li><a target="_BLANK" href="https://www.nytimes.com/2015/01/18/opinion/sunday/t-m-luhrmann-redefining-mental-illness.html?_r=0">Redefining Mental Illness</a></li>
                        <li><a target="_BLANK" href="https://academic.oup.com/ckj/article/12/1/19/5162583">Air pollution and kidney disease: review of current evidence</a></li>
                        <li><a target="_BLANK" href="https://www.annualreviews.org/doi/pdf/10.1146/annurev-publhealth-040218-044132">Aligning Programs and Policies to Support Food Security and Public Health Goals in the United States</a></li>
                        <li><a target="_BLANK" href="http://stakerchiro.com/tylenol-use-alters-sex-hormones-and-may-cause-birth-defects/">Tylenol Use Alters Sex Hormones and May Cause Birth Defects</a></li>
                        <li><a target="_BLANK" href="https://www.vox.com/2018/9/24/17880392/opioid-crisis-public-health-liver-transplant-organs">Opioid overdose deaths are why the waiting list for organ transplants is shrinking</a></li>
                        <li><a target="_BLANK" href="https://www.cdc.gov/violenceprevention/elderabuse/index.html">CDC on Elder Abuse</a></li>
                        <li><a target="_BLANK" href="https://trueviralnews.com/opioid-epidemic-increases-number-of-organs-available-for-transplant/">Opioid epidemic increases number of organs available for transplant</a></li>
                        <li><a target="_BLANK" href="https://www.centerforhealthjournalism.org/">Center for Health Journalism</a></li>
                        <li><a target="_BLANK" href="https://apple.news/A1UX-cWXHRUqYUnjoGHMdjw">A New Mexico farmer is dumping 12,000 gallons of milk a day. Here's why</a></li>
                        <li><a target="_BLANK" href="http://www.smartmarriages.com/hazardous.html">William Doherty: How Therapy Can be Hazardous to Your Marital Health</a></li>
                        <li><a target="_BLANK" href="https://www.healio.com/nephrology/practice-management/news/online/%7Bf4dfc210-11c7-4e8c-8b0f-6a05a4967a04%7D/nsaids-may-increase-risk-for-nephrotic-syndrome?M_BT=4415056187239">NSAIDs may increase risk for nephrotic syndrome</a></li>
                        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=1y2SIIeqy34">Peter Seeger: Where Have All the Flowers Gone</a></li>
                        <li><a target="_BLANK" href="https://www.verywellhealth.com/safety-of-using-contrast-in-mri-scans-4154264">FDA Warning: Be Careful Using Contrast in MRI Scans</a></li>
                        <li><a target="_BLANK" href="https://www.unionleader.com/opinion/columnists/your-turn-nh-jane-zill----deregulation-jeopardizes/article_bab4e5c4-fc1d-54cf-a618-55d28a74591d.html">Deregulation Jeopardizes Transplant Patients</a></li>
                        <li><a target="_BLANK" href="https://www.beckershospitalreview.com/hospital-management-administration/michael-dowling-where-are-healthcare-ceos-in-the-fight-against-gun-violence.html">Michael Dowling: Where are healthcare CEOs in the fight against gun violence?</a></li>
                    </ul>
    </div>
    
    `;
}

function openSelfHelp(){

    document.getElementsByClassName("menu__link--active")[0].classList.remove("menu__link--active");
    document.getElementById("helpButton").classList.add("menu__link--active");

    document.getElementById("view").innerHTML = `<div>
    <h1 align="center"><b>Selected Resources for Self Help</b></h1>
    <br>
    <center>
    <ul style="list-style-type:none" class="selfhelp">
        <li><a target="_BLANK" href="https://suicidepreventionlifeline.org">National Suicide Prevention Lifeline</a></li>
        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=qqU-VjqjczE">Parasympathetic Nervous System: Crash Course</a></li>
        <li><a target="_BLANK" href="https://www.bustle.com/p/what-is-eco-anxiety-heres-what-to-do-if-youre-struggling-to-cope-with-climate-change-warnings-12963121">What Is Eco-Anxiety? Here's What To Do If You're Struggling To Cope With Climate Change Warnings</a></li>
        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=61JRS9raMbk">How To Stop Caring What People Think</a></li>
        <li><a target="_BLANK" href="https://www.verywellmind.com/things-to-stop-if-you-love-an-alcoholic-67300">10 Things to Stop Doing If You Love An Alcoholic</a></li>
        <li><a target="_BLANK" href="https://www.ptsd.va.gov">National Center for PTSD</a></li>
        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=0IDgBlCHVsA">Sympathetic Nervous System: Crash Course</a></li>
        <li><a target="_BLANK" href="https://www.seniorliving.org/research/preventing-elder-abuse/">Preventing Elder Abuse, Assault, and Theft</a></li>
        <li><a target="_BLANK" href="https://www.lifewithcancer.org/get-help/children-teens-and-cancer/resources-for-pediatric-oncology-patients-and-their-families/">Life With Cancer</a></li>
        <li><a target="_BLANK" href="https://www.caregiver.org/adult-protective-services-and-elder-abuse-hotline-1">Family Caregiver Alliance</a></li>
        <li><a target="_BLANK" href="https://harmreduction.org/about-us/principles-of-harm-reduction/">Principles of Harm Reduction (for Substance Abuse)</a></li>
        <li><a target="_BLANK" href="https://suicidepreventionlifeline.org">National Suicide Prevention LifeLine</a></li>
        <li><a target="_BLANK" href="https://transequality.org/additional-help">National Center for Transgender Equality</a></li>
        <li><a target="_BLANK" href="https://youtu.be/bczm0RsIZUM">BREATHE. | Joe DiStefano | TEDxLugano" on YouTube</a></li>
        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=36m1o-tM05g">Sam Berns: My philosophy for a happy life</a></li>
        <li><a target="_BLANK" href="https://www.caregiver.org/grief-and-loss">Family Caregiver Alliance: National Center on Caregiving</a></li>
        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=3YobOEJxIog">Parasympathetic Repair by Steve Fowkes, as presented on February 19, 2015.</a></li>
        <li><a target="_BLANK" href="https://spinditty.com/learning/What-Singing-Does-To-Your-Brain">How Singing Affects Your Brain-Six Reasons to Sing</a></li>
        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=vTkX4wfkj1A">STOP DRINKING: Why alcohol kills self-improvement</a></li>
        <li><a target="_BLANK" href="https://www.nami.org">National Alliance for the Mentally Ill</a></li>
        <li><a target="_BLANK" href="https://www.huffpost.com/entry/americas-first-transgender-suicide-hotline-is-now_b_5a3d253ee4b0df0de8b0648c">America's First Transgender Suicide Hotline is Live</a></li>
        <li><a target="_BLANK" href="https://www.healio.com/pulmonology/practice-management/news/online/%7Bac77767d-420d-4453-838f-a79e8879fbeb%7D/everyday-solutions-to-reduce-implicit-bias-in-health-care">Everyday solutions to reduce implicit bias in health care</a></li>
        <li><a target="_BLANK" href="https://www.youtube.com/watch?v=71pCilo8k4M">Autonomic Nervous System: Crash Course</a></li>
        <li><a target="_BLANK" href="https://www.helpguide.org/articles/abuse/elder-abuse-and-neglect.htm">Elder Abuse and Neglect</a></li>
        <li><a target="_BLANK" href="https://www.nhcadsv.org/member-programs.html">New Hampshire Coalition Against Domestic and Sexual Assault</a></li>
        <li><a target="_BLANK" href="https://drcnh.org">Disability Rights Center - NH</a></li>
    </ul>
    </center>
</div>`;
}
