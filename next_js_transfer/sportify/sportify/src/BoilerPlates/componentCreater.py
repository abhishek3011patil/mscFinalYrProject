import os

def create_component(component_name):
    # Create directory for component
    component_dir = f"./{component_name}"
    os.makedirs(component_dir)

    # Create SCSS file
    scss_filename = f"{component_name}/{component_name}.scss"
    with open(scss_filename, "w") as scss_file:
        scss_file.write(f".{component_name} {{\n  /* Styles for {component_name} */\n}}")

    # Create JavaScript file
    js_filename = f"{component_name}/{component_name}.js"
    with open(js_filename, "w") as js_file:
        js_file.write(f"import React from 'react';\n\nfunction {component_name}() {{\n  return (\n    <div className='{component_name}'>\n      {/* {component_name} component */}\n    </div>\n  );\n}}\n\nexport default {component_name};")

if __name__ == "__main__":
    component_name = "TryTry"
    create_component(component_name)
    print(f"Component '{component_name}' created successfully!")