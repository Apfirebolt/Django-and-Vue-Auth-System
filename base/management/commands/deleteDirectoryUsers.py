from django.core.management.base import BaseCommand, CommandError
from base.models import DirectoryUsers


class Command(BaseCommand):
    help = 'Deletes all entries in the directory users table'

    def handle(self, *args, **options):
        try:
            allDirectoryUsers = DirectoryUsers.objects.all()
            for oneDirectoryUser in allDirectoryUsers:
                oneDirectoryUser.delete()
                print('Directory user deleted')
        except Exception as err:
            print('Some error occurred', err)

        self.stdout.write(self.style.SUCCESS('Deletion operation successfully completed'))