# Generated by Django 4.0.3 on 2022-05-31 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movix_api', '0002_alter_film_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='image',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
