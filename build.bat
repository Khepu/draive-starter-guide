@echo OFF

if exist .\build\ (
  del .\build\* /Q
) else (
  mkdir build
)

copy .\template .\build\template

pandoc --standalone --listings index.md --toc -c .\template\styles.css --template .\template\template.html -o .\build\index.html --metadata title="Draive Starter Guide"
