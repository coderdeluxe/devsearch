# Generated by Django 4.0.2 on 2022-02-17 11:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_featured_iamge'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='featured_iamge',
            new_name='featured_image',
        ),
    ]
