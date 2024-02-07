(lang dune 3.11)
(using melange 0.1)
(using directory-targets 0.1)

(name riot_website)

(source (github riot-ml/website))

(authors "Leandro Ostera <leandro@abstractmachines.dev>")

(maintainers "Leandro Ostera <leandro@abstractmachines.dev>")

(license MIT)

; Provides a link to the project's documentation.
(documentation https://github.com/your-username/website)

(package
 (name riot_website)
 (depends
  (dune (>= 3.11))
  (melange (>= 2.1.0))
  (ocaml (>= 5.1.0))
  opam-check-npm-deps
  ppx_deriving
  (reason (>= 3.10.0))
))
