--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: keyboard_sessions; Type: TABLE; Schema: public; Owner: keyscribe
--

CREATE TABLE public.keyboard_sessions (
    id integer NOT NULL,
    name character varying(255),
    owner uuid NOT NULL
);


ALTER TABLE public.keyboard_sessions OWNER TO keyscribe;

--
-- Name: keyboards; Type: TABLE; Schema: public; Owner: keyscribe
--

CREATE TABLE public.keyboards (
    id integer NOT NULL,
    status boolean DEFAULT false,
    name character varying(50),
    owner uuid,
    hardware_id integer,
    session_id integer,
    role character varying(50),
    CONSTRAINT session_and_role_null_or_filled CHECK ((((session_id IS NOT NULL) AND (role IS NOT NULL)) OR ((session_id IS NULL) AND (role IS NULL))))
);


ALTER TABLE public.keyboards OWNER TO keyscribe;

--
-- Name: known_hardware_ids; Type: TABLE; Schema: public; Owner: keyscribe
--

CREATE TABLE public.known_hardware_ids (
    id integer NOT NULL
);


ALTER TABLE public.known_hardware_ids OWNER TO keyscribe;

--
-- Name: session; Type: TABLE; Schema: public; Owner: keyscribe
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO keyscribe;

--
-- Name: users; Type: TABLE; Schema: public; Owner: keyscribe
--

CREATE TABLE public.users (
    username character varying(50),
    password character(60),
    role character varying(20),
    user_id uuid NOT NULL,
    firstname character varying(30),
    lastname character varying(40),
    emailaddress character varying(100)
);


ALTER TABLE public.users OWNER TO keyscribe;

--
-- Data for Name: keyboard_sessions; Type: TABLE DATA; Schema: public; Owner: keyscribe
--

COPY public.keyboard_sessions (id, name, owner) FROM stdin;
1	default session	a9c0ec79-6a2b-4bdb-9aa1-43889a6f9f65
\.


--
-- Data for Name: keyboards; Type: TABLE DATA; Schema: public; Owner: keyscribe
--

COPY public.keyboards (id, status, name, owner, hardware_id, session_id, role) FROM stdin;
63393800	f	teacher board	a9c0ec79-6a2b-4bdb-9aa1-43889a6f9f65	1	\N	\N
1	f	elsa's board	63d52b73-f985-4612-84e6-8bcb8c1c96f5	12345678	1	teacher
95537921	f	andrews board	a9c0ec79-6a2b-4bdb-9aa1-43889a6f9f65	12345677	1	student
65748022	f	student board	63d52b73-f985-4612-84e6-8bcb8c1c96f5	2	\N	\N
\.


--
-- Data for Name: known_hardware_ids; Type: TABLE DATA; Schema: public; Owner: keyscribe
--

COPY public.known_hardware_ids (id) FROM stdin;
12345678
12345677
1
2
3
4
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: keyscribe
--

COPY public.session (sid, sess, expire) FROM stdin;
bHtmWmVL41w3XvWIHo49fPRPP8lbtyJP	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"63d52b73-f985-4612-84e6-8bcb8c1c96f5"}}	2024-02-27 00:22:46
R43cGKDH_Pm6gfKj9DxCtgK6Cb1X_b3L	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"a9c0ec79-6a2b-4bdb-9aa1-43889a6f9f65"}}	2024-02-27 02:13:25
P0vgo28Ax0oPulNuxRboHtv1ymXdsxTs	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"63d52b73-f985-4612-84e6-8bcb8c1c96f5"}}	2024-02-27 17:19:37
ujSUNdnhgXACZJOOlbxbhqFN0HaAq6k3	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"63d52b73-f985-4612-84e6-8bcb8c1c96f5"}}	2024-02-27 00:21:21
4oZM4J4WaNWafc43CcDrwwOq3YWz9abf	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"63d52b73-f985-4612-84e6-8bcb8c1c96f5"}}	2024-02-27 02:46:56
iJMDVawQ6Yc5m9lNJdnlew2banB555-p	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"63d52b73-f985-4612-84e6-8bcb8c1c96f5"}}	2024-02-27 04:24:54
e5urbrLYcTJd_lKr5I4HJgvGY-Jegt-P	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"63d52b73-f985-4612-84e6-8bcb8c1c96f5"}}	2024-02-27 04:24:54
71hfOWpsl6ZvmQBU6UjOtBfsFQQG6H5e	{"cookie":{"originalMaxAge":null,"expires":null,"secure":true,"httpOnly":true,"path":"/"},"passport":{"user":"63d52b73-f985-4612-84e6-8bcb8c1c96f5"}}	2024-02-27 17:31:03
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: keyscribe
--

COPY public.users (username, password, role, user_id, firstname, lastname, emailaddress) FROM stdin;
student	$2b$11$Ug2KWWyunlTv7HuhYG3Ree7fSolIy3Lj.4ME3FgjzGrA3.DqtZ.FS	\N	63d52b73-f985-4612-84e6-8bcb8c1c96f5	Alice	Gator	def456@ufl.edu
teacher	$2b$11$oFvhe2aODDl6zkadgJAnO.vIsG4zLeHnJtUxfVBknU9t3FfJXUmGa	\N	a9c0ec79-6a2b-4bdb-9aa1-43889a6f9f65	Bob	Gator	abc123@ufl.edu
adahort7	$2b$11$OPbtLT70Kh3irfPHJAaGo.yYfwNpdNcArZfzwvt2QTwuEoxKCCUYq	\N	7f1466bd-236c-4900-add4-3569a5f6cee8	Adam	Horton	adam.horton@ufl.edu
annasheehan	$2b$11$6Vtg49F8qkHBDW30cepWi.u/fQwOUA3.roe59Hi.K3AW2bOODSkzC	\N	f591af45-9771-464c-8701-4234e14b7aaf	Anna	Sheehan	annasheehan@ufl.edu
lorenzcarva	$2b$11$4IxyoqPex2O4/91Miu/wReCAzaGH4MhFmoSGerI//yrn5xbvEa/rG	\N	1dad40fe-ade7-4b65-98a6-81f079c5601c	Lorenz	Carvajal	lorenzcarvajal@ufl.edu
\.


--
-- Name: keyboard_sessions keyboard_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.keyboard_sessions
    ADD CONSTRAINT keyboard_sessions_pkey PRIMARY KEY (id);


--
-- Name: keyboards keyboards_pkey; Type: CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.keyboards
    ADD CONSTRAINT keyboards_pkey PRIMARY KEY (id);


--
-- Name: known_hardware_ids known_hardware_ids_pkey; Type: CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.known_hardware_ids
    ADD CONSTRAINT known_hardware_ids_pkey PRIMARY KEY (id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (user_id);


--
-- Name: IDX_session_expire; Type: INDEX; Schema: public; Owner: keyscribe
--

CREATE INDEX "IDX_session_expire" ON public.session USING btree (expire);


--
-- Name: keyboard_sessions fk_owner; Type: FK CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.keyboard_sessions
    ADD CONSTRAINT fk_owner FOREIGN KEY (owner) REFERENCES public.users(user_id);


--
-- Name: keyboards fk_session_id; Type: FK CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.keyboards
    ADD CONSTRAINT fk_session_id FOREIGN KEY (session_id) REFERENCES public.keyboard_sessions(id) ON DELETE SET NULL DEFERRABLE INITIALLY DEFERRED;


--
-- Name: keyboards keyboards_hardware_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.keyboards
    ADD CONSTRAINT keyboards_hardware_id_fkey FOREIGN KEY (hardware_id) REFERENCES public.known_hardware_ids(id);


--
-- Name: keyboards keyboards_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: keyscribe
--

ALTER TABLE ONLY public.keyboards
    ADD CONSTRAINT keyboards_users_fk FOREIGN KEY (owner) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

