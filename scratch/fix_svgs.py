import os

folder = 'src/assets'
target_color = '#4f46e5'
old_color = '#f97316'

for f in os.listdir(folder):
    if f.startswith('undraw_') and f.endswith('.svg'):
        path = os.path.join(folder, f)
        with open(path, 'r', encoding='utf-8') as file:
            data = file.read()
        
        new_data = data.replace(old_color, target_color)
        
        with open(path, 'w', encoding='utf-8') as file:
            file.write(new_data)
        print(f"Updated {f}")
