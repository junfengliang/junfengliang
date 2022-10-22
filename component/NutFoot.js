import Script from "next/script"
export default function NutFoot(){
    return (
        <>
        <footer style={{textAlign: 'center'}}>
            &copy; 2020-2022 NutUml
        </footer>
        <Script>
            {`
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?381aeaab62c7738765d54c516d97ef83";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
            `}
        </Script>
        </>
    )
}