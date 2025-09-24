#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
<<<<<<< HEAD
=======
from pathlib import Path
>>>>>>> d2407e95f0ad3f7a4db97e92211fa4d437f23773


def main():
    """Run administrative tasks."""
<<<<<<< HEAD
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
=======
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
>>>>>>> d2407e95f0ad3f7a4db97e92211fa4d437f23773
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
<<<<<<< HEAD

=======
    
BASE_DIR = Path(__file__).resolve().parent
sys.path.append(str(BASE_DIR / 'apps'))
>>>>>>> d2407e95f0ad3f7a4db97e92211fa4d437f23773

if __name__ == '__main__':
    main()
