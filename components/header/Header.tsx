import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useLogin from '../../hooks/useLogin';
import style from './style.module.scss';

function Header() {
  const { user } = useLogin();

  return (
    <header className={ style.header }>
      <div className={ style.logo }>
        <Link href="/" passHref>
          <a aria-label="Página inicial">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="64" viewBox="0 0 270 60" fill="none">
                <mask id="A" fill="#fff">
                  <path d="M27.41 24.34c3.407.42 5.927 1.517 7.56 3.29 1.68 1.727 2.52 3.873 2.52 6.44s-.957 4.993-2.87 7.28c-1.867 2.287-4.27 4.06-7.21 5.32-1.307.513-3.033.887-5.18 1.12a59.02 59.02 0 0 1-6.51.35c-3.733 0-7.56-.35-11.48-1.05-.7-.14-1.447-.49-2.24-1.05-.747-.56-1.12-1.377-1.12-2.45C.833 39.297.67 33.323.39 25.67l-.07-3.85L.04 7.75c0-.607.35-1.307 1.05-2.1.747-.84 1.633-1.307 2.66-1.4.607 0 1.19-.023 1.75-.07 5.273-.513 8.797-.77 10.57-.77 3.5 0 6.58.35 9.24 1.05 2.707.653 4.947 1.867 6.72 3.64.653.747 1.19 1.703 1.61 2.87.42 1.12.63 2.217.63 3.29a10.8 10.8 0 0 1-1.82 6.3c-1.213 1.913-2.893 3.173-5.04 3.78zM16.49 9.36c-1.587 0-3.243.093-4.97.28-1.68.187-3.103.42-4.27.7l.42 13.23 2.52-.07 8.96-1.05c1.213-.28 2.403-.817 3.57-1.61 1.167-.84 2.123-1.703 2.87-2.59.793-.933 1.19-1.633 1.19-2.1 0-.7-.14-1.4-.42-2.1-.28-.747-.583-1.283-.91-1.61-1.26-1.213-2.543-2.03-3.85-2.45s-3.01-.63-5.11-.63zM7.88 41.98c2.38.327 4.643.49 6.79.49 4.713 0 8.423-.607 11.13-1.82 2.753-1.26 4.13-3.64 4.13-7.14 0-1.4-1.05-2.567-3.15-3.5s-4.363-1.4-6.79-1.4c-1.633 0-3.71.187-6.23.56a65.72 65.72 0 0 1-5.88.56l.14 5.32c0 1.447-.023 2.543-.07 3.29l-.07 3.64zm75.159 20.3c-1.773 0-3.267-.303-4.48-.91-1.167-.56-2.053-1.26-2.66-2.1-.56-.793-.84-1.493-.84-2.1 0-.793.28-1.423.84-1.89.56-.42 1.237-.63 2.03-.63.467 0 .91.14 1.33.42l.7.49a5.27 5.27 0 0 0 .98.56 2.08 2.08 0 0 0 1.05.28c1.027 0 1.867-.677 2.52-2.03s1.307-3.547 1.96-6.58c-2.1-3.08-3.85-6.16-5.25-9.24l-1.61-3.71c-.233-.56-.887-2.007-1.96-4.34-1.027-2.38-2.053-4.48-3.08-6.3-.653-1.307-.98-2.193-.98-2.66 0-1.167.397-2.03 1.19-2.59.84-.56 1.797-.84 2.87-.84.747 0 1.307.163 1.68.49.42.28.887.817 1.4 1.61 1.353 2.24 2.823 5.6 4.41 10.08l2.24 5.88c.56 1.307 1.237 2.637 2.03 3.99.793-1.82 1.797-4.923 3.01-9.31l1.82-6.02c.513-1.54 1.073-2.94 1.68-4.2.42-.84.933-1.517 1.54-2.03a3.43 3.43 0 0 1 2.17-.77c.793 0 1.634.303 2.52.91.934.56 1.4 1.237 1.4 2.03 0 .467-.163 1.027-.49 1.68-1.82 4.2-3.43 8.167-4.83 11.9-1.353 3.687-2.66 7.747-3.92 12.18a113.89 113.89 0 0 1-2.38 7.07c-.793 2.24-1.353 3.617-1.68 4.13-.933 1.307-1.983 2.38-3.15 3.22-1.167.887-2.52 1.33-4.06 1.33zm73.665-26.32c0 2.193-.466 3.967-1.4 5.32s-2.543 2.683-4.83 3.99c-1.54.933-3.313 1.657-5.32 2.17a26.79 26.79 0 0 1-6.09.7c-1.26 0-2.73-.233-4.41-.7l-3.99-1.47-1.19-1.05c-2.1-1.727-3.57-3.103-4.41-4.13-.793-1.073-1.19-2.38-1.19-3.92 0-1.213.28-2.123.84-2.73s1.47-.91 2.73-.91c.654 0 1.26.21 1.82.63s1.05 1.003 1.47 1.75c1.167 2.053 2.544 3.57 4.13 4.55 1.634.933 3.547 1.4 5.74 1.4 2.054 0 4.13-.63 6.23-1.89 1.727-1.073 2.59-2.123 2.59-3.15 0-1.82-.816-3.337-2.45-4.55-1.586-1.213-3.873-2.31-6.86-3.29-1.82-.653-4.55-1.867-8.19-3.64-2.473-1.213-4.316-2.707-5.53-4.48s-1.82-3.64-1.82-5.6c0-1.773.607-3.5 1.82-5.18 1.26-1.727 2.777-3.01 4.55-3.85.934-.467 2.427-.957 4.48-1.47 2.054-.56 3.594-.84 4.62-.84 1.914 0 3.57.233 4.97.7 1.4.42 2.777 1.027 4.13 1.82 2.054 1.167 3.57 2.217 4.55 3.15s1.47 2.1 1.47 3.5c0 .84-.326 1.587-.98 2.24-.606.653-1.68.98-3.22.98-.373 0-.746-.163-1.12-.49s-.84-.817-1.4-1.47c-.746-.98-1.47-1.633-2.17-1.96-.186-.047-.956-.35-2.31-.91-1.306-.56-2.94-.84-4.9-.84-1.866 0-3.523.443-4.97 1.33-1.446.84-2.17 2.077-2.17 3.71s1.47 2.963 4.41 3.99l7.77 3.15a44.28 44.28 0 0 1 6.09 3.15c2.24 1.353 3.874 2.777 4.9 4.27 1.074 1.493 1.61 3.5 1.61 6.02zm35.107 12.25c-3.5 0-5.857-1.353-7.07-4.06-.607-1.353-1.003-3.103-1.19-5.25l-.28-7.7v-2.17c0-3.36-1.12-5.04-3.36-5.04-1.307 0-2.613.677-3.92 2.03-1.307 1.307-2.403 3.057-3.29 5.25a18.28 18.28 0 0 0-1.26 6.72c0 1.54.07 2.94.21 4.2l.14 3.64c0 1.587-1.097 2.38-3.29 2.38-1.073 0-2.03-.233-2.87-.7-.793-.467-1.19-1.073-1.19-1.82l.28-8.82-.07-9.24c0-1.493-.117-7.023-.35-16.59l-.21-6.44c0-1.027.467-1.913 1.4-2.66.933-.793 1.983-1.19 3.15-1.19 1.027 0 1.773.233 2.24.7s.7 1.19.7 2.17c0 1.213-.023 2.637-.07 4.27l-.14 3.64c-.14 2.38-.21 4.76-.21 7.14 0 2.333-.047 4.177-.14 5.53 1.4-2.053 2.987-3.57 4.76-4.55 1.82-1.027 3.943-1.54 6.37-1.54 1.773 0 3.407.793 4.9 2.38 1.54 1.54 2.473 3.313 2.8 5.32.093 1.027.14 2.543.14 4.55l-.07 5.11c0 .793.047 2.03.14 3.71.047.793.303 1.633.77 2.52.513.887 1.097 1.54 1.75 1.96.607.373 1.003.747 1.19 1.12s.28.793.28 1.26-.21.957-.63 1.47c-.42.467-.957.7-1.61.7zm34.912-22.68c.373.653.677 1.61.91 2.87.233 1.213.35 2.31.35 3.29 0 1.82-.397 4.41-1.19 7.77-3.22 5.88-7.98 8.82-14.28 8.82-2.333 0-4.713-.77-7.14-2.31s-4.107-3.313-5.04-5.32c-1.26-4.013-1.89-6.557-1.89-7.63 0-1.867.397-3.85 1.19-5.95.84-2.1 1.89-3.92 3.15-5.46.793-1.073 2.217-1.983 4.27-2.73 2.053-.793 3.92-1.19 5.6-1.19 3.267 0 6.043.63 8.33 1.89 2.287 1.213 4.2 3.197 5.74 5.95zm-6.09 11.27c.233-.607.35-2.17.35-4.69 0-1.353-.257-2.683-.77-3.99-.467-1.307-1.167-2.427-2.1-3.36-.093-.093-.35-.233-.77-.42-.42-.233-1.003-.443-1.75-.63-.7-.233-1.517-.35-2.45-.35-2.613 0-4.527 1.05-5.74 3.15s-1.82 4.48-1.82 7.14c0 .467.117 1.353.35 2.66.28 1.307.513 2.123.7 2.45.14.327.49.793 1.05 1.4.607.56 1.33 1.073 2.17 1.54.887.42 1.797.63 2.73.63 2.1 0 3.78-.49 5.04-1.47 1.26-1.027 2.263-2.38 3.01-4.06zm15.8-13.16c-.42 0-.816.047-1.19.14-.373.047-.746.07-1.12.07-.513 0-1.003-.233-1.47-.7-.42-.467-.63-.887-.63-1.26 0-1.213.607-2.147 1.82-2.8 1.214-.7 2.45-1.05 3.71-1.05 1.074 0 2.17.373 3.29 1.12 1.167.7 2.03 1.61 2.59 2.73a10.48 10.48 0 0 1 4.48-3.15 15.88 15.88 0 0 1 5.53-.98c2.147 0 4.13.677 5.95 2.03 1.867 1.353 3.337 3.08 4.41 5.18 1.074 2.053 1.61 4.107 1.61 6.16 0 2.007-.21 3.803-.63 5.39-.42 1.54-1.166 3.103-2.24 4.69-1.213 1.68-2.846 3.057-4.9 4.13-2.006 1.073-4.41 1.61-7.21 1.61-.746 0-1.656-.187-2.73-.56-1.073-.42-1.96-.863-2.66-1.33l-.49 8.26c0 1.4.07 2.73.21 3.99l.14 3.22c0 1.027-.35 1.773-1.05 2.24a3.82 3.82 0 0 1-2.31.77c-1.68 0-2.8-.467-3.36-1.4-.513-.887-.77-2.17-.77-3.85.187-4.013.42-7.723.7-11.13.28-4.2.42-10.687.42-19.46 0-.84-.163-1.727-.49-2.66s-.863-1.4-1.61-1.4zm8.89 14.49c.234.887.887 1.633 1.96 2.24 1.12.56 2.124.84 3.01.84 2.66 0 4.644-.723 5.95-2.17.98-1.027 1.61-2.03 1.89-3.01.327-.98.49-2.543.49-4.69 0-1.68-.326-3.08-.98-4.2-.653-1.167-1.446-2.007-2.38-2.52-.933-.56-1.82-.84-2.66-.84-1.913 0-3.476.583-4.69 1.75-1.166 1.12-1.913 2.66-2.24 4.62-.233 1.54-.35 4.2-.35 7.98zM69.063 18.5H63.25v-1.9c0-2.016-.816-3.949-2.27-5.374a7.83 7.83 0 0 0-10.96 0c-1.453 1.425-2.27 3.358-2.27 5.374v1.9h-5.812c-.514 0-1.007.2-1.37.556A1.88 1.88 0 0 0 40 20.4v20.9c0 1.512.612 2.962 1.702 4.031A5.87 5.87 0 0 0 45.813 47h19.375a5.87 5.87 0 0 0 4.11-1.669C70.388 44.262 71 42.812 71 41.3V20.4a1.88 1.88 0 0 0-.567-1.343c-.363-.356-.856-.556-1.37-.556zm-17.437-1.9c0-1.008.408-1.974 1.135-2.687A3.91 3.91 0 0 1 55.5 12.8c1.028 0 2.013.4 2.74 1.113s1.135 1.679 1.135 2.687v1.9h-7.75v-1.9zm15.5 24.7a1.88 1.88 0 0 1-.567 1.344c-.363.356-.856.556-1.37.556H45.813c-.514 0-1.007-.2-1.37-.556a1.88 1.88 0 0 1-.568-1.344v-19h3.875v1.9a1.88 1.88 0 0 0 .568 1.344c.363.356.856.556 1.37.556s1.007-.2 1.37-.556a1.88 1.88 0 0 0 .568-1.344v-1.9h7.75v1.9a1.88 1.88 0 0 0 .568 1.344c.363.356.856.556 1.37.556s1.007-.2 1.37-.556a1.88 1.88 0 0 0 .568-1.344v-1.9h3.875v19z" />

                </mask>
                <path d="M27.41 24.34c3.407.42 5.927 1.517 7.56 3.29 1.68 1.727 2.52 3.873 2.52 6.44s-.957 4.993-2.87 7.28c-1.867 2.287-4.27 4.06-7.21 5.32-1.307.513-3.033.887-5.18 1.12a59.02 59.02 0 0 1-6.51.35c-3.733 0-7.56-.35-11.48-1.05-.7-.14-1.447-.49-2.24-1.05-.747-.56-1.12-1.377-1.12-2.45C.833 39.297.67 33.323.39 25.67l-.07-3.85L.04 7.75c0-.607.35-1.307 1.05-2.1.747-.84 1.633-1.307 2.66-1.4.607 0 1.19-.023 1.75-.07 5.273-.513 8.797-.77 10.57-.77 3.5 0 6.58.35 9.24 1.05 2.707.653 4.947 1.867 6.72 3.64.653.747 1.19 1.703 1.61 2.87.42 1.12.63 2.217.63 3.29a10.8 10.8 0 0 1-1.82 6.3c-1.213 1.913-2.893 3.173-5.04 3.78zM16.49 9.36c-1.587 0-3.243.093-4.97.28-1.68.187-3.103.42-4.27.7l.42 13.23 2.52-.07 8.96-1.05c1.213-.28 2.403-.817 3.57-1.61 1.167-.84 2.123-1.703 2.87-2.59.793-.933 1.19-1.633 1.19-2.1 0-.7-.14-1.4-.42-2.1-.28-.747-.583-1.283-.91-1.61-1.26-1.213-2.543-2.03-3.85-2.45s-3.01-.63-5.11-.63zM7.88 41.98c2.38.327 4.643.49 6.79.49 4.713 0 8.423-.607 11.13-1.82 2.753-1.26 4.13-3.64 4.13-7.14 0-1.4-1.05-2.567-3.15-3.5s-4.363-1.4-6.79-1.4c-1.633 0-3.71.187-6.23.56a65.72 65.72 0 0 1-5.88.56l.14 5.32c0 1.447-.023 2.543-.07 3.29l-.07 3.64zm75.159 20.3c-1.773 0-3.267-.303-4.48-.91-1.167-.56-2.053-1.26-2.66-2.1-.56-.793-.84-1.493-.84-2.1 0-.793.28-1.423.84-1.89.56-.42 1.237-.63 2.03-.63.467 0 .91.14 1.33.42l.7.49a5.27 5.27 0 0 0 .98.56 2.08 2.08 0 0 0 1.05.28c1.027 0 1.867-.677 2.52-2.03s1.307-3.547 1.96-6.58c-2.1-3.08-3.85-6.16-5.25-9.24l-1.61-3.71c-.233-.56-.887-2.007-1.96-4.34-1.027-2.38-2.053-4.48-3.08-6.3-.653-1.307-.98-2.193-.98-2.66 0-1.167.397-2.03 1.19-2.59.84-.56 1.797-.84 2.87-.84.747 0 1.307.163 1.68.49.42.28.887.817 1.4 1.61 1.353 2.24 2.823 5.6 4.41 10.08l2.24 5.88c.56 1.307 1.237 2.637 2.03 3.99.793-1.82 1.797-4.923 3.01-9.31l1.82-6.02c.513-1.54 1.073-2.94 1.68-4.2.42-.84.933-1.517 1.54-2.03a3.43 3.43 0 0 1 2.17-.77c.793 0 1.634.303 2.52.91.934.56 1.4 1.237 1.4 2.03 0 .467-.163 1.027-.49 1.68-1.82 4.2-3.43 8.167-4.83 11.9-1.353 3.687-2.66 7.747-3.92 12.18a113.89 113.89 0 0 1-2.38 7.07c-.793 2.24-1.353 3.617-1.68 4.13-.933 1.307-1.983 2.38-3.15 3.22-1.167.887-2.52 1.33-4.06 1.33zm73.665-26.32c0 2.193-.466 3.967-1.4 5.32s-2.543 2.683-4.83 3.99c-1.54.933-3.313 1.657-5.32 2.17a26.79 26.79 0 0 1-6.09.7c-1.26 0-2.73-.233-4.41-.7l-3.99-1.47-1.19-1.05c-2.1-1.727-3.57-3.103-4.41-4.13-.793-1.073-1.19-2.38-1.19-3.92 0-1.213.28-2.123.84-2.73s1.47-.91 2.73-.91c.654 0 1.26.21 1.82.63s1.05 1.003 1.47 1.75c1.167 2.053 2.544 3.57 4.13 4.55 1.634.933 3.547 1.4 5.74 1.4 2.054 0 4.13-.63 6.23-1.89 1.727-1.073 2.59-2.123 2.59-3.15 0-1.82-.816-3.337-2.45-4.55-1.586-1.213-3.873-2.31-6.86-3.29-1.82-.653-4.55-1.867-8.19-3.64-2.473-1.213-4.316-2.707-5.53-4.48s-1.82-3.64-1.82-5.6c0-1.773.607-3.5 1.82-5.18 1.26-1.727 2.777-3.01 4.55-3.85.934-.467 2.427-.957 4.48-1.47 2.054-.56 3.594-.84 4.62-.84 1.914 0 3.57.233 4.97.7 1.4.42 2.777 1.027 4.13 1.82 2.054 1.167 3.57 2.217 4.55 3.15s1.47 2.1 1.47 3.5c0 .84-.326 1.587-.98 2.24-.606.653-1.68.98-3.22.98-.373 0-.746-.163-1.12-.49s-.84-.817-1.4-1.47c-.746-.98-1.47-1.633-2.17-1.96-.186-.047-.956-.35-2.31-.91-1.306-.56-2.94-.84-4.9-.84-1.866 0-3.523.443-4.97 1.33-1.446.84-2.17 2.077-2.17 3.71s1.47 2.963 4.41 3.99l7.77 3.15a44.28 44.28 0 0 1 6.09 3.15c2.24 1.353 3.874 2.777 4.9 4.27 1.074 1.493 1.61 3.5 1.61 6.02zm35.107 12.25c-3.5 0-5.857-1.353-7.07-4.06-.607-1.353-1.003-3.103-1.19-5.25l-.28-7.7v-2.17c0-3.36-1.12-5.04-3.36-5.04-1.307 0-2.613.677-3.92 2.03-1.307 1.307-2.403 3.057-3.29 5.25a18.28 18.28 0 0 0-1.26 6.72c0 1.54.07 2.94.21 4.2l.14 3.64c0 1.587-1.097 2.38-3.29 2.38-1.073 0-2.03-.233-2.87-.7-.793-.467-1.19-1.073-1.19-1.82l.28-8.82-.07-9.24c0-1.493-.117-7.023-.35-16.59l-.21-6.44c0-1.027.467-1.913 1.4-2.66.933-.793 1.983-1.19 3.15-1.19 1.027 0 1.773.233 2.24.7s.7 1.19.7 2.17c0 1.213-.023 2.637-.07 4.27l-.14 3.64c-.14 2.38-.21 4.76-.21 7.14 0 2.333-.047 4.177-.14 5.53 1.4-2.053 2.987-3.57 4.76-4.55 1.82-1.027 3.943-1.54 6.37-1.54 1.773 0 3.407.793 4.9 2.38 1.54 1.54 2.473 3.313 2.8 5.32.093 1.027.14 2.543.14 4.55l-.07 5.11c0 .793.047 2.03.14 3.71.047.793.303 1.633.77 2.52.513.887 1.097 1.54 1.75 1.96.607.373 1.003.747 1.19 1.12s.28.793.28 1.26-.21.957-.63 1.47c-.42.467-.957.7-1.61.7zm34.912-22.68c.373.653.677 1.61.91 2.87.233 1.213.35 2.31.35 3.29 0 1.82-.397 4.41-1.19 7.77-3.22 5.88-7.98 8.82-14.28 8.82-2.333 0-4.713-.77-7.14-2.31s-4.107-3.313-5.04-5.32c-1.26-4.013-1.89-6.557-1.89-7.63 0-1.867.397-3.85 1.19-5.95.84-2.1 1.89-3.92 3.15-5.46.793-1.073 2.217-1.983 4.27-2.73 2.053-.793 3.92-1.19 5.6-1.19 3.267 0 6.043.63 8.33 1.89 2.287 1.213 4.2 3.197 5.74 5.95zm-6.09 11.27c.233-.607.35-2.17.35-4.69 0-1.353-.257-2.683-.77-3.99-.467-1.307-1.167-2.427-2.1-3.36-.093-.093-.35-.233-.77-.42-.42-.233-1.003-.443-1.75-.63-.7-.233-1.517-.35-2.45-.35-2.613 0-4.527 1.05-5.74 3.15s-1.82 4.48-1.82 7.14c0 .467.117 1.353.35 2.66.28 1.307.513 2.123.7 2.45.14.327.49.793 1.05 1.4.607.56 1.33 1.073 2.17 1.54.887.42 1.797.63 2.73.63 2.1 0 3.78-.49 5.04-1.47 1.26-1.027 2.263-2.38 3.01-4.06zm15.8-13.16c-.42 0-.816.047-1.19.14-.373.047-.746.07-1.12.07-.513 0-1.003-.233-1.47-.7-.42-.467-.63-.887-.63-1.26 0-1.213.607-2.147 1.82-2.8 1.214-.7 2.45-1.05 3.71-1.05 1.074 0 2.17.373 3.29 1.12 1.167.7 2.03 1.61 2.59 2.73a10.48 10.48 0 0 1 4.48-3.15 15.88 15.88 0 0 1 5.53-.98c2.147 0 4.13.677 5.95 2.03 1.867 1.353 3.337 3.08 4.41 5.18 1.074 2.053 1.61 4.107 1.61 6.16 0 2.007-.21 3.803-.63 5.39-.42 1.54-1.166 3.103-2.24 4.69-1.213 1.68-2.846 3.057-4.9 4.13-2.006 1.073-4.41 1.61-7.21 1.61-.746 0-1.656-.187-2.73-.56-1.073-.42-1.96-.863-2.66-1.33l-.49 8.26c0 1.4.07 2.73.21 3.99l.14 3.22c0 1.027-.35 1.773-1.05 2.24a3.82 3.82 0 0 1-2.31.77c-1.68 0-2.8-.467-3.36-1.4-.513-.887-.77-2.17-.77-3.85.187-4.013.42-7.723.7-11.13.28-4.2.42-10.687.42-19.46 0-.84-.163-1.727-.49-2.66s-.863-1.4-1.61-1.4zm8.89 14.49c.234.887.887 1.633 1.96 2.24 1.12.56 2.124.84 3.01.84 2.66 0 4.644-.723 5.95-2.17.98-1.027 1.61-2.03 1.89-3.01.327-.98.49-2.543.49-4.69 0-1.68-.326-3.08-.98-4.2-.653-1.167-1.446-2.007-2.38-2.52-.933-.56-1.82-.84-2.66-.84-1.913 0-3.476.583-4.69 1.75-1.166 1.12-1.913 2.66-2.24 4.62-.233 1.54-.35 4.2-.35 7.98zM69.063 18.5H63.25v-1.9c0-2.016-.816-3.949-2.27-5.374a7.83 7.83 0 0 0-10.96 0c-1.453 1.425-2.27 3.358-2.27 5.374v1.9h-5.812c-.514 0-1.007.2-1.37.556A1.88 1.88 0 0 0 40 20.4v20.9c0 1.512.612 2.962 1.702 4.031A5.87 5.87 0 0 0 45.813 47h19.375a5.87 5.87 0 0 0 4.11-1.669C70.388 44.262 71 42.812 71 41.3V20.4a1.88 1.88 0 0 0-.567-1.343c-.363-.356-.856-.556-1.37-.556zm-17.437-1.9c0-1.008.408-1.974 1.135-2.687A3.91 3.91 0 0 1 55.5 12.8c1.028 0 2.013.4 2.74 1.113s1.135 1.679 1.135 2.687v1.9h-7.75v-1.9zm15.5 24.7a1.88 1.88 0 0 1-.567 1.344c-.363.356-.856.556-1.37.556H45.813c-.514 0-1.007-.2-1.37-.556a1.88 1.88 0 0 1-.568-1.344v-19h3.875v1.9a1.88 1.88 0 0 0 .568 1.344c.363.356.856.556 1.37.556s1.007-.2 1.37-.556a1.88 1.88 0 0 0 .568-1.344v-1.9h7.75v1.9a1.88 1.88 0 0 0 .568 1.344c.363.356.856.556 1.37.556s1.007-.2 1.37-.556a1.88 1.88 0 0 0 .568-1.344v-1.9h3.875v19z" fill="#000" />
                <path d="M27.41 24.34c3.407.42 5.927 1.517 7.56 3.29 1.68 1.727 2.52 3.873 2.52 6.44s-.957 4.993-2.87 7.28c-1.867 2.287-4.27 4.06-7.21 5.32-1.307.513-3.033.887-5.18 1.12a59.02 59.02 0 0 1-6.51.35c-3.733 0-7.56-.35-11.48-1.05-.7-.14-1.447-.49-2.24-1.05-.747-.56-1.12-1.377-1.12-2.45C.833 39.297.67 33.323.39 25.67l-.07-3.85L.04 7.75c0-.607.35-1.307 1.05-2.1.747-.84 1.633-1.307 2.66-1.4.607 0 1.19-.023 1.75-.07 5.273-.513 8.797-.77 10.57-.77 3.5 0 6.58.35 9.24 1.05 2.707.653 4.947 1.867 6.72 3.64.653.747 1.19 1.703 1.61 2.87.42 1.12.63 2.217.63 3.29a10.8 10.8 0 0 1-1.82 6.3c-1.213 1.913-2.893 3.173-5.04 3.78zM16.49 9.36c-1.587 0-3.243.093-4.97.28-1.68.187-3.103.42-4.27.7l.42 13.23 2.52-.07 8.96-1.05c1.213-.28 2.403-.817 3.57-1.61 1.167-.84 2.123-1.703 2.87-2.59.793-.933 1.19-1.633 1.19-2.1 0-.7-.14-1.4-.42-2.1-.28-.747-.583-1.283-.91-1.61-1.26-1.213-2.543-2.03-3.85-2.45s-3.01-.63-5.11-.63zM7.88 41.98c2.38.327 4.643.49 6.79.49 4.713 0 8.423-.607 11.13-1.82 2.753-1.26 4.13-3.64 4.13-7.14 0-1.4-1.05-2.567-3.15-3.5s-4.363-1.4-6.79-1.4c-1.633 0-3.71.187-6.23.56a65.72 65.72 0 0 1-5.88.56l.14 5.32c0 1.447-.023 2.543-.07 3.29l-.07 3.64zm75.159 20.3c-1.773 0-3.267-.303-4.48-.91-1.167-.56-2.053-1.26-2.66-2.1-.56-.793-.84-1.493-.84-2.1 0-.793.28-1.423.84-1.89.56-.42 1.237-.63 2.03-.63.467 0 .91.14 1.33.42l.7.49a5.27 5.27 0 0 0 .98.56 2.08 2.08 0 0 0 1.05.28c1.027 0 1.867-.677 2.52-2.03s1.307-3.547 1.96-6.58c-2.1-3.08-3.85-6.16-5.25-9.24l-1.61-3.71c-.233-.56-.887-2.007-1.96-4.34-1.027-2.38-2.053-4.48-3.08-6.3-.653-1.307-.98-2.193-.98-2.66 0-1.167.397-2.03 1.19-2.59.84-.56 1.797-.84 2.87-.84.747 0 1.307.163 1.68.49.42.28.887.817 1.4 1.61 1.353 2.24 2.823 5.6 4.41 10.08l2.24 5.88c.56 1.307 1.237 2.637 2.03 3.99.793-1.82 1.797-4.923 3.01-9.31l1.82-6.02c.513-1.54 1.073-2.94 1.68-4.2.42-.84.933-1.517 1.54-2.03a3.43 3.43 0 0 1 2.17-.77c.793 0 1.634.303 2.52.91.934.56 1.4 1.237 1.4 2.03 0 .467-.163 1.027-.49 1.68-1.82 4.2-3.43 8.167-4.83 11.9-1.353 3.687-2.66 7.747-3.92 12.18a113.89 113.89 0 0 1-2.38 7.07c-.793 2.24-1.353 3.617-1.68 4.13-.933 1.307-1.983 2.38-3.15 3.22-1.167.887-2.52 1.33-4.06 1.33zm73.665-26.32c0 2.193-.466 3.967-1.4 5.32s-2.543 2.683-4.83 3.99c-1.54.933-3.313 1.657-5.32 2.17a26.79 26.79 0 0 1-6.09.7c-1.26 0-2.73-.233-4.41-.7l-3.99-1.47-1.19-1.05c-2.1-1.727-3.57-3.103-4.41-4.13-.793-1.073-1.19-2.38-1.19-3.92 0-1.213.28-2.123.84-2.73s1.47-.91 2.73-.91c.654 0 1.26.21 1.82.63s1.05 1.003 1.47 1.75c1.167 2.053 2.544 3.57 4.13 4.55 1.634.933 3.547 1.4 5.74 1.4 2.054 0 4.13-.63 6.23-1.89 1.727-1.073 2.59-2.123 2.59-3.15 0-1.82-.816-3.337-2.45-4.55-1.586-1.213-3.873-2.31-6.86-3.29-1.82-.653-4.55-1.867-8.19-3.64-2.473-1.213-4.316-2.707-5.53-4.48s-1.82-3.64-1.82-5.6c0-1.773.607-3.5 1.82-5.18 1.26-1.727 2.777-3.01 4.55-3.85.934-.467 2.427-.957 4.48-1.47 2.054-.56 3.594-.84 4.62-.84 1.914 0 3.57.233 4.97.7 1.4.42 2.777 1.027 4.13 1.82 2.054 1.167 3.57 2.217 4.55 3.15s1.47 2.1 1.47 3.5c0 .84-.326 1.587-.98 2.24-.606.653-1.68.98-3.22.98-.373 0-.746-.163-1.12-.49s-.84-.817-1.4-1.47c-.746-.98-1.47-1.633-2.17-1.96-.186-.047-.956-.35-2.31-.91-1.306-.56-2.94-.84-4.9-.84-1.866 0-3.523.443-4.97 1.33-1.446.84-2.17 2.077-2.17 3.71s1.47 2.963 4.41 3.99l7.77 3.15a44.28 44.28 0 0 1 6.09 3.15c2.24 1.353 3.874 2.777 4.9 4.27 1.074 1.493 1.61 3.5 1.61 6.02zm35.107 12.25c-3.5 0-5.857-1.353-7.07-4.06-.607-1.353-1.003-3.103-1.19-5.25l-.28-7.7v-2.17c0-3.36-1.12-5.04-3.36-5.04-1.307 0-2.613.677-3.92 2.03-1.307 1.307-2.403 3.057-3.29 5.25a18.28 18.28 0 0 0-1.26 6.72c0 1.54.07 2.94.21 4.2l.14 3.64c0 1.587-1.097 2.38-3.29 2.38-1.073 0-2.03-.233-2.87-.7-.793-.467-1.19-1.073-1.19-1.82l.28-8.82-.07-9.24c0-1.493-.117-7.023-.35-16.59l-.21-6.44c0-1.027.467-1.913 1.4-2.66.933-.793 1.983-1.19 3.15-1.19 1.027 0 1.773.233 2.24.7s.7 1.19.7 2.17c0 1.213-.023 2.637-.07 4.27l-.14 3.64c-.14 2.38-.21 4.76-.21 7.14 0 2.333-.047 4.177-.14 5.53 1.4-2.053 2.987-3.57 4.76-4.55 1.82-1.027 3.943-1.54 6.37-1.54 1.773 0 3.407.793 4.9 2.38 1.54 1.54 2.473 3.313 2.8 5.32.093 1.027.14 2.543.14 4.55l-.07 5.11c0 .793.047 2.03.14 3.71.047.793.303 1.633.77 2.52.513.887 1.097 1.54 1.75 1.96.607.373 1.003.747 1.19 1.12s.28.793.28 1.26-.21.957-.63 1.47c-.42.467-.957.7-1.61.7zm34.912-22.68c.373.653.677 1.61.91 2.87.233 1.213.35 2.31.35 3.29 0 1.82-.397 4.41-1.19 7.77-3.22 5.88-7.98 8.82-14.28 8.82-2.333 0-4.713-.77-7.14-2.31s-4.107-3.313-5.04-5.32c-1.26-4.013-1.89-6.557-1.89-7.63 0-1.867.397-3.85 1.19-5.95.84-2.1 1.89-3.92 3.15-5.46.793-1.073 2.217-1.983 4.27-2.73 2.053-.793 3.92-1.19 5.6-1.19 3.267 0 6.043.63 8.33 1.89 2.287 1.213 4.2 3.197 5.74 5.95zm-6.09 11.27c.233-.607.35-2.17.35-4.69 0-1.353-.257-2.683-.77-3.99-.467-1.307-1.167-2.427-2.1-3.36-.093-.093-.35-.233-.77-.42-.42-.233-1.003-.443-1.75-.63-.7-.233-1.517-.35-2.45-.35-2.613 0-4.527 1.05-5.74 3.15s-1.82 4.48-1.82 7.14c0 .467.117 1.353.35 2.66.28 1.307.513 2.123.7 2.45.14.327.49.793 1.05 1.4.607.56 1.33 1.073 2.17 1.54.887.42 1.797.63 2.73.63 2.1 0 3.78-.49 5.04-1.47 1.26-1.027 2.263-2.38 3.01-4.06zm15.8-13.16c-.42 0-.816.047-1.19.14-.373.047-.746.07-1.12.07-.513 0-1.003-.233-1.47-.7-.42-.467-.63-.887-.63-1.26 0-1.213.607-2.147 1.82-2.8 1.214-.7 2.45-1.05 3.71-1.05 1.074 0 2.17.373 3.29 1.12 1.167.7 2.03 1.61 2.59 2.73a10.48 10.48 0 0 1 4.48-3.15 15.88 15.88 0 0 1 5.53-.98c2.147 0 4.13.677 5.95 2.03 1.867 1.353 3.337 3.08 4.41 5.18 1.074 2.053 1.61 4.107 1.61 6.16 0 2.007-.21 3.803-.63 5.39-.42 1.54-1.166 3.103-2.24 4.69-1.213 1.68-2.846 3.057-4.9 4.13-2.006 1.073-4.41 1.61-7.21 1.61-.746 0-1.656-.187-2.73-.56-1.073-.42-1.96-.863-2.66-1.33l-.49 8.26c0 1.4.07 2.73.21 3.99l.14 3.22c0 1.027-.35 1.773-1.05 2.24a3.82 3.82 0 0 1-2.31.77c-1.68 0-2.8-.467-3.36-1.4-.513-.887-.77-2.17-.77-3.85.187-4.013.42-7.723.7-11.13.28-4.2.42-10.687.42-19.46 0-.84-.163-1.727-.49-2.66s-.863-1.4-1.61-1.4zm8.89 14.49c.234.887.887 1.633 1.96 2.24 1.12.56 2.124.84 3.01.84 2.66 0 4.644-.723 5.95-2.17.98-1.027 1.61-2.03 1.89-3.01.327-.98.49-2.543.49-4.69 0-1.68-.326-3.08-.98-4.2-.653-1.167-1.446-2.007-2.38-2.52-.933-.56-1.82-.84-2.66-.84-1.913 0-3.476.583-4.69 1.75-1.166 1.12-1.913 2.66-2.24 4.62-.233 1.54-.35 4.2-.35 7.98zM69.063 18.5H63.25v-1.9c0-2.016-.816-3.949-2.27-5.374a7.83 7.83 0 0 0-10.96 0c-1.453 1.425-2.27 3.358-2.27 5.374v1.9h-5.812c-.514 0-1.007.2-1.37.556A1.88 1.88 0 0 0 40 20.4v20.9c0 1.512.612 2.962 1.702 4.031A5.87 5.87 0 0 0 45.813 47h19.375a5.87 5.87 0 0 0 4.11-1.669C70.388 44.262 71 42.812 71 41.3V20.4a1.88 1.88 0 0 0-.567-1.343c-.363-.356-.856-.556-1.37-.556zm-17.437-1.9c0-1.008.408-1.974 1.135-2.687A3.91 3.91 0 0 1 55.5 12.8c1.028 0 2.013.4 2.74 1.113s1.135 1.679 1.135 2.687v1.9h-7.75v-1.9zm15.5 24.7a1.88 1.88 0 0 1-.567 1.344c-.363.356-.856.556-1.37.556H45.813c-.514 0-1.007-.2-1.37-.556a1.88 1.88 0 0 1-.568-1.344v-19h3.875v1.9a1.88 1.88 0 0 0 .568 1.344c.363.356.856.556 1.37.556s1.007-.2 1.37-.556a1.88 1.88 0 0 0 .568-1.344v-1.9h7.75v1.9a1.88 1.88 0 0 0 .568 1.344c.363.356.856.556 1.37.556s1.007-.2 1.37-.556a1.88 1.88 0 0 0 .568-1.344v-1.9h3.875v19z" mask="url(#A)" stroke="#000" strokeWidth="16" />
              </svg>
            </span>
          </a>
        </Link>
      </div>
      <div className={ style.login }>
        { user?.username ? (
          <figure title={ user?.username }>
            <Image
              src={ user?.image }
              layout="fill"
              priority
              quality={ 100 }
            />
          </figure>
        ) : (
          <Link href="login">
            Login
          </Link>
        ) }
      </div>
    </header>
  );
}

export default Header;
