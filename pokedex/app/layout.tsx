import "./globals.css";

import Navbar from "./components/navbar";

export default function LayoutProps({children}) {

    return (

        <html lang="pt-br">
            <body>
                <Navbar />
                
                {children}  
            </body>
        </html>
    );
}
