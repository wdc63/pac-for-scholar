function FindProxyForURL(url, host)
{
// variable strings to return
var proxy_yes = "SOCKS5 127.0.0.1:1080";
var proxy_no = "DIRECT";

// 国外文献数据库
if (shExpMatch(url, "http://ieeexplore.ieee.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ieeexplore.ieee.org*")) { return proxy_yes; }  
if (shExpMatch(url, "http://dl.acm.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.dl.acm.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.springer.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.computersinbiologyandmedicine.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.sciencedirect.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.safaribooksonline.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.wiley.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.computer.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.webofknowledge.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.acs.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.aip.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ebscohost.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.sagepub.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ebsco.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ieee.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.isi.edu*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.webofknowledge.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.isi-web.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.oclc.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ovid.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.proquest.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.stanford.edu*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.wiley.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.gale.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.blackwell.co.uk*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.cas.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.iop.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ebrary.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.jstor.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.knovel.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.educationandbarcoding.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.taylorandfrancis.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.osa.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.topcoder.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.sciencedirect.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.euromonitor.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.thieme.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.elsevier.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ets.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.springer.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.emeraldinsight.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.doi.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.cam.ac.uk*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.pressdisplay.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.aiaa.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.igpublish.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.lexisnexis.com.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.lexisnexis.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.bmj.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.rsc.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.muse.jhu.edu*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.mheducation.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.oup.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ebscohost.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.agu.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.ingenta.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.informahealthcare.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.bioone.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.eastview.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.chairpage.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.euclidanalytics.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.nature.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.asce.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.truvenhealth.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.karger.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.astm.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.msu.edu*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.wolterskluwer.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.degruyter.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.engineeringvillage.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.visiblebody.com*")) { return proxy_yes; }
// 以下为国内文献数据库
// 增加了百度文库，因为国内某些高校如重庆大学购买了百度文库的数据库
if (shExpMatch(url, "http://*.wanfangdata.com.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.cnki.net*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.cqvip.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.sinomed.ac.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.nstl.gov.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.reasonlib.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.airitilibrary.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.datahistory.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.lib.whu.edu.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.duxiu.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.koolearn.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.nju.edu.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.hbdlib.cn*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.lawyee.net*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.wenku.baidu.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://wenku.baidu.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.nic.edu.cn*")) { return proxy_yes; }

// Https
// 国外文献数据库
if (shExpMatch(url, "https://ieeexplore.ieee.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ieeexplore.ieee.org*")) { return proxy_yes; }  
if (shExpMatch(url, "https://dl.acm.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.springer.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.computersinbiologyandmedicine.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.sciencedirect.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.safaribooksonline.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.wiley.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.computer.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.webofknowledge.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.acs.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.aip.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ebscohost.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.sagepub.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ebsco.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ieee.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.isi.edu*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.webofknowledge.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.isi-web.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.oclc.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ovid.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.proquest.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.stanford.edu*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.wiley.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.gale.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.blackwell.co.uk*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.cas.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.iop.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ebrary.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.jstor.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.knovel.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.educationandbarcoding.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.taylorandfrancis.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.osa.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.topcoder.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.sciencedirect.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.euromonitor.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.thieme.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.elsevier.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ets.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.springer.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.emeraldinsight.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.doi.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.cam.ac.uk*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.pressdisplay.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.aiaa.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.igpublish.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.lexisnexis.com.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.lexisnexis.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.bmj.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.rsc.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.muse.jhu.edu*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.mheducation.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.oup.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ebscohost.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.agu.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.ingenta.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.informahealthcare.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.bioone.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.eastview.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.chairpage.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.euclidanalytics.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.nature.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.asce.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.truvenhealth.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.karger.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.astm.org*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.msu.edu*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.wolterskluwer.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.degruyter.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.engineeringvillage.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.visiblebody.com*")) { return proxy_yes; }
// 以下为国内文献数据库
// 增加了百度文库，因为国内某些高校如重庆大学购买了百度文库的数据库
if (shExpMatch(url, "https://*.wanfangdata.com.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.cnki.net*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.cqvip.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.sinomed.ac.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.nstl.gov.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.reasonlib.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.airitilibrary.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.datahistory.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.lib.whu.edu.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.duxiu.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.koolearn.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.nju.edu.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.hbdlib.cn*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.lawyee.net*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.wenku.baidu.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://wenku.baidu.com*")) { return proxy_yes; }
if (shExpMatch(url, "https://*.nic.edu.cn*")) { return proxy_yes; }

return proxy_no;
}
