import React from "react";
import styled from "styled-components";

const ThankyouWrapper = styled.div`

 

.p1{
    color:green;
    defaulr:none;
}
h4{
    color: blue;
}



.a2{
    background-color: white;
    margin: 200px;
  
    font-size: 50px;
}

img{
    height: 60px;
    width:60px
}


`

function Thankyou() {
    return(
        <ThankyouWrapper>
            <div className="a1">
            <div className="a2">
                <p className="p1">
                 
                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEX///9s5nlj5HHm5+b16fT5+flt6Xpe5m3n5+ew57X//v9t53pu63ui56lr43hhvWvv/PCs6LJiwmxo2HT7//x56IT46fZX5mf2/fdkyG9o1HPu//Bt8Xx254J86Iddw2ix8bd49Ibg/ePT/9fI/c289cGp8bCm9K2j96vC/smL9pZn63bl/ei3/r+Z+6Oe+qd79ImJ/ZW46b7C58aH1Y+T25vd899cyGiZ4qGT1pl/2onj9OXI6svh/+TZ/dzM+tCR55ne6N+d2KNuzXh3zoKx37bM69Bk+V45AAAJaUlEQVR4nO2dCVPbOhRGI7co0BjbOG6fHQzGgdJsBJqVlwDtI5T//5PelROWLPKSXMmmozPTmUIbyOHz1ZVkkZRKCoVCoVAoFAqFQqFQKBQKhUKhUCgUir8Sh5H3kxDC8f35xfezyx8Nxo/Ls+8X5/fHeT8pBL6USu5xvdlonYS+77d1SjQN/hCqt+Hj8KTVaNaP3ej/fVCOzy+7odZuU0IMwyDviT6m7bYWdi/PP2aabueqpfsaWRZbxyCar7euOm7eTzgj9WYLrkojSe8lT7hqW8163k86PRbTSwxv1ZJJWh+iJDs/fkJ6mfQWknr7549O3k8/Cee+62vb6C0kNb97X+h+Wb/2t4rvfZD+9X3eGlzqXZ/u5hc5Ur9bzGvVvQp3zO/VUQ+vitc8nIuwjeMXObbDC6dYw+rxdRtNb077ukgzHaeJUYDLwLDaLMyo6l772H4R/nVBqvEh3KEDxmFo4UPecoymL0RvTtjMWw+uUMQhdB2jnPeVarWQeiBXUe9aeQrWb6hQPwa9yXFZdR+KFwTFMDfFc5FjzHv883wEH2QJgmIuXUNagpFiDinWQ4mCxPCl16JcQUD2cGNJaBPL0Buprd/tapIFCdFaMhUbgmcymzD0hjzBZlm+IJujSpuGP4R5CAKhpF04N8zHjynKKcUG9pZMetpSSvFCzJZFKgz/QrygJXOyto4vfLXooG8bZkO/Fr0B9yvfCCHEX2IFnTBnQRhPxYZ4lu81ymifiRTs3EgYRxPm9MaNyDtTMlqhdnoaP60X2RQ7EoYZ7dS1jHhFX9w9m4YuXvArTMwSFMUtMjriZ9zaadTR4xWNUFQliq/CKMFkRVGV6AqvwkWCyYqC5m7Ce6H29V0ztyoximJ6otUSLriUjEViFFsiQvwl9DYaCJ6sTMdiLlSjLWJ22hXbKlYSjBT5KerX+ILHggVXE4wU+Snq+F3/u9Cl/YYEI0XKUWSLfeTzNm5XoB8kyPm21gnvIV3sTanjUKTg5gSBL7e8ENHnNRcCt/G5CZb2PvMMiYa9JyVwJNVOeAnuffr2m2eod3EFHZGCvG+6t//5sMx9nI67m/EgbCSNTfCIL2j4uFv8wuak2lfet9z79Pnwn5hH4s5NnYYowS0TZDQwL9Pjn2Iu0pgE9+MThMv0J+a0piOmDHdJELkjillXLK0HlwUTE2QPxzyBciVioNkpQaB9hWgoot/HJJgwii5A7flf8c+W8Oei6RIkhHKHqew46H67J8jAaxf4q9/dEySoe9/32M1CO+Wt7iDBo5QJYs7bzjMZJq+zUBIEQ7x2keVwAtUeEu4d4SSIe2whwy8cgGDJ1WIVcRIEfLwzUulXFlRjUynrJEYRKUGCuro4SzuWUjo/rhyTYkyC+99iFrwb0PEML1Nu0swTZHBTxEsQvhaiYcoM6duBc3fzTmdsDWZLEDK8RPL7kjJDqr0/qLwxRcwE4atdIu0Kg2G6aenySewNtfh6A3SDYOYE4Ucq2VBbPWq+liJugrgZpqnD9bP0K7WInGBUh1j3Li6T++FagoylFLEThH6INdKk6PiUbv5tCPdtkoqeIG7HT9qmKfN+3eM1xXeHENYEt0uQGIiGifcOy//tcR66SDEmwawzmTdD/zuaYeLaovxpn6cYpSggQdy1RT/R8OAbVxFSFJEgM7xDM3xOXD3FKVokZttw6wQB/xnNcJrcD8sHn/mKvP2UXRJkhlM0QzfFEj8uRZ4gJLiDIDHwbuV/qaaYtv0Tk+JmwdgboMnQKuJpjEmaaVvGFHdNkOgTPMHSbaoFYqYU2cbvToJEv0U07KVb5GdIcecEocn2EA1HKXcTU6e4aw0yjBGi4fQk5a2ZlCkiJEjoCV6zgHbxO+1uG6T4KVERI0Gi/0Y99/WY+kgUpJikmHHjl4P2iClY6pNK2u+cmGKqW9iJVEgf1XBaTW2YlCJOgqRSxSxDYJbeMH5ExUkQDGe4gqXDLPfXYlJEShB6xSGy4fM4y31gbopYCRJ9jLd0mmPNMh1WYClumBejJUjoDP33ER7TrC/e2DiiZjiEkCRYxe0VjLtshptSxEsQDPF2MF7xMp5WWEsRrQYBw8MXLB3WMp45WRlRERMkehV7JGVMbZqhJzKWUsRMsFKxMdcVL7jDjJW4tNLATBCqcCjkJUDuxpmfymuKeKNoBHozXOBlDvGlFlEThAhFjDOMnp39fFs0u0FOULdxlxVvWE/ZQ4xqcR8zQYjwSdgLnPwJtjjBBynusnW/jhH8ESVYcrysPZFR7h0gJkj0mifwtT96trHFaeEypiA1bMxdxFXciSf7tfbWDL2J0JfDeh5vc50iotdE9cIXBnYl49wNlQqxB2IFS9OZl2eI1Jshb0Ct0wtq+ZUirQUih5kFk63GUxxBw3wSL1gazey8KrFiz0SsmtboBzmVou4FoiakKwztXEqR1uyhHMGSNTGr8lPUq+aTtFehHY1N6aMNjDJjKUU4p+/JVgRBT0KjeONPYKe/34YAzGUErpk2MpSqyARljTIvuDIVI0Hp7+ThPtl20kscIkGJbcsbRt+wBrac+Rusee1BLm9UYj3ZpiG+L+qGaYvbekpQHATmFrtv2aBVM8gnQYYLioLX/HoNBHN8uyDncWx6FXEx0opnjh/zfXOyg5opbryBMcYcH+TqB9zNbLOW9b5bKioUfnozAfd6szKaBKYnYEzVDc8MJhIn23ycQ8+GMRX3UqUsQO+wIG+e5/RrNnKMLEC71i/MGyCWrKFnmh5BKscKNdiXG+b6hmurOD0vgB86xchRp3BJBF6vOAHOsQ7B0aztmiM015oJfkeFCnBBfTC2IceKvr0jPBbys8eDor4L+d0gsCFHg24VZIVSA/Kzg0EBeiAPtz+DHE2vSvWszQMeUYXxxR7P+gVpETzuhqweQRJaWlpLSI8wPai/YYHze8EZ3Y5ZkDZI6imipLoOeuwB4/HtqGgDKAerP/BYRTJLAwKilQ2FCZ9j/2JEdlB93qBfxPGThzs6mkCSc8ta1WBJQaAvRB8Qo1qb20F6k6NRwctvmehgaac3nEA0zCES9bzaC/D3108H9mTY67w+6mPhWKPeYBaMg8C2F0avwGcC+JfZoDeyPkjxcbHqvYN/B5OZF7zhzSaDfw969Y9UefE4rjWdjp6f7/r9/t3z82g6tdyPnpxCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqF4i/kf0Ku8nbseq54AAAAAElFTkSuQmCC" alt="" /><br />
                 Your Order is placed 
                 </p>
                 <p>
                 Thank You <br />
                for Shopping</p>
                
            
            </div>
            </div>
            </ThankyouWrapper>
            
            
        
    )
}

export { Thankyou }