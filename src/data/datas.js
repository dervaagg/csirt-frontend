// Hero Data Start.......................
import picHero1 from "../assets/Heroimg/pic_01.jpg"
import picHero2 from "../assets/Heroimg/pic_02.jpg"
import picHero3 from "../assets/Heroimg/pic_03.jpg"
import picHero4 from "../assets/Heroimg/pic_04.jpg"
import picHero5 from "../assets/Heroimg/pic_05.jpg"
import picHero6 from "../assets/Heroimg/pic_06.jpg"
import picHero7 from "../assets/Heroimg/pic_07.jpg"
import picHero8 from "../assets/Heroimg/pic_08.jpg"
import picHero9 from "../assets/Heroimg/pic_09.jpg"
import picHero10 from "../assets/Heroimg/pic_10.jpg"
import picHero11 from "../assets/Heroimg/pic_11.jpg"
import picHero12 from "../assets/Heroimg/pic_12.jpg"
import picHero13 from "../assets/Heroimg/pic_13.jpg"
import picHero14 from "../assets/Heroimg/pic_14.jpg"
import picHero15 from "../assets/Heroimg/pic_15.jpg"
import picHero16 from "../assets/Heroimg/pic_16.jpg"

export const squareData = [
    {
      id: 1,
      src: picHero1,
    },
    {
      id: 2,
      src: picHero2,
    },
    {
      id: 3,
      src: picHero3,
    },
    {
      id: 4,
      src: picHero4,
    },
    {
      id: 5,
      src: picHero5,
    },
    {
      id: 6,
      src: picHero6,
    },
    {
      id: 7,
      src: picHero7,
    },
    {
      id: 8,
      src: picHero8,
    },
    {
      id: 9,
      src: picHero9,
    },
    {
      id: 10,
      src: picHero10,
    },
    {
      id: 11,
      src: picHero11,
    },
    {
      id: 12,
      src: picHero12,
    },
    {
      id: 13,
      src: picHero13,
    },
    {
      id: 14,
      src: picHero14,
    },
    {
      id: 15,
      src: picHero15,
    },
    {
      id: 16,
      src: picHero16,
    },
  ];
// Hero Data End.......................

// About Data Start.......................
import AboutImage from '../assets/about.png'

export const AboutData = {
    aboutInfo: [
        {
            Image: AboutImage,
            AboutMe: "Waskita Computer Security Incident Response Team, disingkat Waskita-CSIRT merupakan tim tanggap insiden siber pada PT Waskita Karya (Persero) Tbk yang ditetapkan oleh Direktur Utama dengan dokumen Surat Keputusan Board Of Director PT Waskita Karya (Persero) Tbk Nomor : 20/SK/WK/2023.",
        }   
    ],
    visiData: [
        {
            id: 1,
            visi :'Visi Waskita-CSIRT adalah mewujudkan keamanan siber perusahaan yang handal.',
        },
    ], 
    misiData: [
        {
            id: 1,
            misi :'Mengidentifikasi kerentanan keamanan siber perusahaan secara menyeluruh.',
        },
        {
            id: 2,
            misi :'Meningkatkan respon aspek keamanan siber kepada seluruh pegawai PT Waskita Karya (Persero) Tbk.',
        },
        {
            id: 3,
            misi :'Meningkatkan mutu layanan IT PT Waskita Karya (Persero) Tbk. dari ancaman siber.',
        },
        {
            id: 4,
            misi :'Melaksanakan implementasi Sistem Manajemen Pengamanan Informasi berdasarkan ISO 27001:2013.',
        }
    ] 
}
//Hero Data End...................

//Start RFC Data...................
import rfcPDF from '../assets/pdf/2. WASKITA CSIRT RFC2350.pdf'

export const rfcData = [
    {
        pdfRFC: rfcPDF,
    },
]
//Start RFC Data...................


// Layanan Data Start.......................

export const layananData = {
    LayananUtama: [
        {
            id: 1,
            layanan: 'Pemberian peringatan terkait keamanan siber',
        },
        {
            id: 2,
            layanan: 'Penanganan insiden siber',
        },
    ],
    LayananTambahan: [
        {
            id: 1,
            layanan: 'Pemberian peringatan terkait keamanan siber',
        },
        {
            id: 2,
            layanan: 'Penanganan insiden siber',
        },
        {
            id: 3,
            layanan: 'Pemberian peringatan terkait keamanan siber',
        },
        {
            id: 4,
            layanan: 'Penanganan insiden siber',
        },
        {
            id: 5,
            layanan: 'Pemberian peringatan terkait keamanan siber',
        },
    ],
}

// Layanan Data END.......................


// Panduan Data Start.......................
// Import Img
import IPdf1 from '../assets/Panduan_Img/Insiden-Serangan-SQL-Injection.jpg'
import IPdf2 from '../assets/Panduan_Img/Insiden-Serangan-DDoS.jpg'
import IPdf3 from '../assets/Panduan_Img/Pelaporan-Insiden.jpg'
import IPdf4 from '../assets/Panduan_Img/Insiden-Serangan-Phishing.jpg'
import IPdf5 from '../assets/Panduan_Img/Insiden-Web-Defacement.jpg'
import IPdf6 from '../assets/Panduan_Img/Insiden-Ransom-sign.jpg'
import IPdf7 from '../assets/Panduan_Img/Insiden-Malware.jpg'
// Import PDF
import PDF1 from '../assets/pdf/Panduan-Penanganan-Insiden-Serangan-SQL-Injection.pdf'
import PDF2 from '../assets/pdf/Panduan-Penanganan-Insiden-Serangan-DDoS.pdf'
import PDF3 from '../assets/pdf/Panduan-Pelaporan-Insiden.pdf'
import PDF4 from '../assets/pdf/Panduan-Penanganan-Insiden-Serangan-Phishing.pdf'
import PDF5 from '../assets/pdf/Panduan-Penanganan-Insiden-Web-Defacement.pdf'
import PDF6 from '../assets/pdf/Panduan-Penanganan-Insiden-Ransom-sign.pdf'
import PDF7 from '../assets/pdf/Panduan-Penanganan-Insiden-Malware.pdf'

export const PanduanData ={
    DataPanduan: [
        { 
            id: 1,
            imgPdf: IPdf1,
            title: 'Panduan Pengamanan Insiden Serangan SQL Injection',
            filePdf: PDF1,
        },   
        { 
            id: 2,
            imgPdf: IPdf2,
            title: 'Panduan Pengamanan Insiden Serangan DDoS',
            filePdf: PDF2,
        },   
        { 
            id: 3,
            imgPdf: IPdf3,
            title: 'Panduan Pelaporan Insiden',
            filePdf: PDF3,
        },   
        { 
            id: 4,
            imgPdf: IPdf4,
            title: 'Panduan Penanganan Insiden Serangan Phising',
            filePdf: PDF4,
        },   
        { 
            id: 5,
            imgPdf: IPdf5,
            title: 'Panduan Penanganan Insiden Web Defacement ',
            filePdf: PDF5,
        },   
        { 
            id: 6,
            imgPdf: IPdf6,
            title: 'Panduan Penanganan Insiden Ransom Sign',
            filePdf: PDF6,
        },   
        { 
            id: 7,
            imgPdf: IPdf7,
            title: 'Panduan Penanganan Insiden Malware',
            filePdf: PDF7,
        },      
    ],
            
} 
// Panduan Data End.......................

//Start News View Data...................
import NewsImage1 from '../assets/project1.png'
import NewsImage2 from '../assets/project2.png'
import NewsImage3 from '../assets/project3.png'
import NewsImage4 from '../assets/project4.png'
import NewsImage5 from '../assets/project5.png'

export const NewsViewData = [    
        {
            id: 1,
            newsImage: NewsImage1,
            title: 'BlackLotus UEFI Bootkit Source Code Leaked on GitHub',
            category: 'MALWARE & THREATS',
            info: 'The BlackLotus UEFI bootkit, initially discovered in October of the previous year.',
            sub_title1: 'MALWARE & THREATS',
            paragraf1: 'The BlackLotus UEFI bootkit, initially discovered in October of the previous year, has had its source code publicly shared on GitHub, albeit with modifications excluding the `Baton Drop` exploit targeting CVE-2022-21894. This bootkit, designed for Windows, boasts APT-level capabilities, including secure boot and UAC bypass, along with the ability to disable security applications on victim systems. Despite Microsoft releasing resources in April to help identify BlackLotus infections and the NSA providing guidance in June to strengthen defenses against it, the leaked source code poses a significant risk. Alex Matrosov, CEO of firmware security company Binarly, emphasizes that the complexity of the supply chain on the Microsoft end and the reliance on syntactic fixes rather than addressing the entire class of related issues beneath the operating system are evident. The persistence of BlackLotus, even after the patching of CVE-2022-21894, underscores the potential long-term and industry-wide impact of vulnerabilities if not effectively mitigated.',
            sub_title2: 'MALWARE & THREATS',
            paragraf2: 'The GitHub release of the BlackLotus source code, stripped of the specific CVE-2022-21894 exploit, underscores the potential for combining old rootkit and bootkit techniques with new exploits to create novel attack opportunities. Alex Matrosov from Binarly points out that the leak exposes the effectiveness of such techniques in evading modern endpoint security solutions. Despite the patching of CVE-2022-21894 last year, BlackLotus was able to utilize the exploit due to the vulnerable binaries not being added to the UEFI revocation list. This incident highlights the enduring risks associated with patched vulnerabilities, emphasizing the importance for enterprise defenders and CISOs to recognize the ongoing dangers posed by threats operating below the operating system. Matrosov warns that this attack vector is likely to become more sophisticated and complex, requiring a proactive and comprehensive security approach.',
            sub_title3: 'MALWARE & THREATS',
            paragraf3: 'In summary, the public availability of the BlackLotus UEFI bootkit`s source code, even with specific exploits removed, presents a significant cybersecurity risk. The incident underscores the challenges in the Microsoft supply chain, the need for comprehensive solutions addressing vulnerabilities below the operating system, and the persistent threat of sophisticated attacks despite patching efforts. Enterprise defenders are urged to stay vigilant and adopt proactive security measures in response to evolving threats.',
        },     
        {
            id: 2,
            newsImage: NewsImage2,
            title: 'Meet CustomerLoader: A Multifaceted Malware Unleashing Diverse Payloads',
            category: 'MALWARE & THREATS',
            info: 'Sekoia uncovered an undocumented .NET loader named CustomerLoader.',
            sub_title1: '',
            paragraf1: 'Sekoia uncovered an undocumented .NET loader named CustomerLoader with the ability to fetch, decrypt, and execute subsequent payloads. From early June onward, various threat actors actively disseminated this loader through deceptive phishing emails, YouTube videos, and web pages designed to mimic authentic sites. The moniker "CustomerLoader" was assigned due to its incorporation of the term "customer" in both its Command and Control (C2) communications and loading functionalities. By leveraging CustomerLoader, malicious actors can download diverse malware families, including infostealers, Remote Access Trojans (RATs), and commodity ransomware. These payloads, delivered as dotRunpeX samples, employ multiple anti-analysis techniques. The evaluation suggests a likely connection between CustomerLoader and a Loader-as-a-Service, though the specific service remains unidentified. It is conceivable that the developer of dotRunpeX integrated CustomerLoader as a new phase preceding the execution of the dotRunpeX injector.',
            sub_title2: 'Details of Subsequent Payloads',
            paragraf2: 'The researchers identified over 40 known malware families distributed by CustomerLoader, encompassing info-stealers like Redline, Formbook, Vidar, Stealc, Raccoon, and Lumma, marketed as Malware-as-a-Service. Additionally, they encountered Remote Access Trojans (RATs) available on GitHub, including AsyncRAT, QuasarRAT, Remcos, njRAT, and XWorm, along with other threats such as Agent Tesla, LgoogLoader, SectopRAT, Darkcloud, and WarzoneRAT. The investigation also unveiled botnets associated with specific malware families distributed through CustomerLoader, with Redline having over 80 botnets, Quasar with 45, Vidar with 9, Remcos with 6, Stealc with 4, and Formbook with 4.',
            sub_title3: 'The Bottom Line',
            paragraf3: 'Although CustomerLoader may not employ advanced techniques on its own, when combined with the dotRunpeX injector, it effectively lowers the detection rate of the final payload, enabling attackers to enhance their success rate in compromising systems. The multitude and diversity of malware families loaded by CustomerLoader during the first half of June indicate a widespread threat.',
        }, 
        {
            id: 3,
            newsImage: NewsImage3,
            title: 'Fake Linux vulnerability exploit drops data-stealing malware',
            category: 'MALWARE & THREATS',
            info: 'The security community, including both cybersecurity researchers and potential threat actors.',
            sub_title1: '',
            paragraf1: 'The security community, including both cybersecurity researchers and potential threat actors, is under attack through a deceptive proof of concept (PoC) exploit, identified as CVE-2023-35829, which installs a Linux password-stealing malware. Uptycs analysts stumbled upon this malicious PoC during routine scans, where irregularities like unexpected network connections, unauthorized system access attempts, and unusual data transfers raised alarms in detection systems. Three repositories were found hosting this malicious fake PoC exploit, with two already removed from GitHub while the third one remains active. The bad PoC has reportedly been widely shared within the security research community, raising concerns about potential infections on a significant number of computers.',
            sub_title2: 'Malicious PoC details',
            paragraf2: 'Exploiting the guise of an exploit for the high-severity CVE-2023-35829 in the Linux kernel before version 6.3.2, a deceptive proof of concept (PoC) actually mimics an older legitimate exploit targeting a different vulnerability, namely CVE-2022-34918. The code cleverly utilizes Linux namespaces, which partition kernel resources, to create the illusion of a root shell, albeit with restricted privileges within the user namespace. This tactic aims to deceive observers into believing the exploit`s authenticity, providing attackers with extended access to the compromised system. Upon initiation, the PoC establishes persistence by generating a `kworker` file and updating its path in the `/etc/bashrc` file. Furthermore, the PoC communicates with a Command and Control (C2) server, downloading and executing a Linux bash script from an external URL. This script, operating under the guise of kernel-level processes, steals sensitive data from the `/etc/passwd` file, manipulates the `~/.ssh/authorized_keys` to grant unauthorized remote access, and employs curl to exfiltrate data via `transfer.sh.` The stolen information includes the username, hostname, and contents of the victim`s home directory, empowering the threat actor with remote control over the server for further manual data theft, leveraging the trust typically placed in kernel-level processes to evade detection by system administrators.',
            sub_title3: 'Don`t trust exploit code',
            paragraf3: 'Uptycs advises researchers who have downloaded and utilized the deceptive proof of concept (PoC) to take precautionary measures, including the removal of any unauthorized SSH keys, deletion of the `kworker` file, elimination of the `kworker` path from the `bashrc` file, and checking for potential threats in `/tmp/.iCE-unix.pid.` Emphasizing the importance of testing PoCs in isolated environments like virtual machines and recommending code inspection before execution, Uptycs also suggests submitting binaries to VirusTotal for a quick and efficient identification of malicious files. The deployment of fake PoCs as a tactic to target both researchers and potential threat actors with malware is not a new phenomenon, as evidenced by recent campaigns impersonating cybersecurity researchers and the North Korean Lazarus hackers` 2021 use of social media to distribute fake PoCs that installed backdoors. These incidents underscore the ongoing challenges faced by the cybersecurity community in navigating the landscape of deceptive tactics employed by malicious.',
        }, 
        {
            id: 4,
            newsImage: NewsImage4,
            title: 'USB Flash Drives for Malware Attack Surges',
            category: 'MALWARE & THREATS',
            info: 'The first campaign, attributed to the China-linked cyberespionage group TEMP.Hex.',
            sub_title1: '',
            paragraf1: 'In the first half of 2023, security researchers from Mandiant observed a significant surge in malware attacks facilitated through USB drives, marking a three-fold increase. Among the reported incidents were two distinct attack campaigns, shedding light on the evolving tactics employed by cybercriminals. The first campaign, attributed to the China-linked cyberespionage group TEMP.Hex, targeted public and private sector organizations globally, deploying USB flash drives to introduce the SOGU malware. This malicious software utilized a DLL hijacking technique, leveraging multiple software on the flash drive, to download a final payload into compromised system memory.',
            sub_title2: '',
            paragraf2: 'The SOGU malware, upon execution, conducted various nefarious activities, including capturing screenshots, recording keystrokes, establishing remote desktop connections, and exfiltrating stolen data through a custom binary protocol to a Command and Control (C2) server. The attack spanned diverse industries, underscoring the broad range of sectors at risk, including construction, engineering, government, manufacturing, retail, media, and pharmaceutical. In a separate attack, the SNOWYDRIVE malware exploited victims who clicked on seemingly legitimate executable files within USB drives. Triggering an infection chain, the attack resulted in the deployment of a shellcode-based backdoor, copying itself to removable drives, executing file-related operations, and facilitating a reverse shell command.',
            sub_title3: '',
            paragraf3: 'The prevalence of USB-based attacks extends beyond individual campaigns, as evidenced by the documented efforts of China-based Camaro Dragon targeting a healthcare institution in Europe. This attack utilized updated versions of the malware toolset, including WispRider and HopperTick, emphasizing the broader geographic scope of USB-based threats across Myanmar, South Korea, Great Britain, India, and Russia. In response to these evolving tactics, organizations are advised to prioritize access restrictions on USB devices, conduct thorough scans for malicious files before connecting them to the network, and enhance visibility into such attack campaigns. The implementation of a robust and automated Threat Intelligence Platform (TIP) is emphasized to ensure real-time monitoring of tactical and technical details, enabling proactive threat mitigation at the initial stages of an attack.',
        },
        {
            id: 5,
            newsImage: NewsImage5,
            title: 'Meet CustomerLoader: A Multifaceted Malware Unleashing Diverse Payloads',
            category: 'MALWARE & THREATS',
            info: 'Sekoia uncovered an undocumented .NET loader named CustomerLoader.',
            sub_title1: '',
            paragraf1: 'Sekoia uncovered an undocumented .NET loader named CustomerLoader with the ability to fetch, decrypt, and execute subsequent payloads. From early June onward, various threat actors actively disseminated this loader through deceptive phishing emails, YouTube videos, and web pages designed to mimic authentic sites. The moniker "CustomerLoader" was assigned due to its incorporation of the term "customer" in both its Command and Control (C2) communications and loading functionalities. By leveraging CustomerLoader, malicious actors can download diverse malware families, including infostealers, Remote Access Trojans (RATs), and commodity ransomware. These payloads, delivered as dotRunpeX samples, employ multiple anti-analysis techniques. The evaluation suggests a likely connection between CustomerLoader and a Loader-as-a-Service, though the specific service remains unidentified. It is conceivable that the developer of dotRunpeX integrated CustomerLoader as a new phase preceding the execution of the dotRunpeX injector.',
            sub_title2: 'Details of subsequent payloads',
            paragraf2: 'The researchers identified over 40 known malware families distributed by CustomerLoader, encompassing info-stealers like Redline, Formbook, Vidar, Stealc, Raccoon, and Lumma, marketed as Malware-as-a-Service. Additionally, they encountered Remote Access Trojans (RATs) available on GitHub, including AsyncRAT, QuasarRAT, Remcos, njRAT, and XWorm, along with other threats such as Agent Tesla, LgoogLoader, SectopRAT, Darkcloud, and WarzoneRAT. The investigation also unveiled botnets associated with specific malware families distributed through CustomerLoader, with Redline having over 80 botnets, Quasar with 45, Vidar with 9, Remcos with 6, Stealc with 4, and Formbook with 4.',
            sub_title3: 'The bottom line',
            paragraf3: 'Although CustomerLoader may not employ advanced techniques on its own, when combined with the dotRunpeX injector, it effectively lowers the detection rate of the final payload, enabling attackers to enhance their success rate in compromising systems. The multitude and diversity of malware families loaded by CustomerLoader during the first half of June indicate a widespread threat.',
        },    
]
//Start News View Data...................

//Start Konetak Data...................
export const kontakData =[
    {
        Alamat : "Waskita Heritage, MT Haryono Kav. 10 Cawang, Jakarta 13340",
        Telephone : "(021)8508510/20 ext 247",
        Email : "csirt@waskita.co.id",
        Jam : "Jam Operasional Pada hari kerja, Senin s.d Jumat, Pukul 08.00 s/d 17.00 WIB",
    },
]
//Start Kontak Data...................
